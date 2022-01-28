$(document).ready( function() {
    $.ajax({
      url: 'https://freecurrencyapi.net/api/v2/latest?apikey=74408d40-7780-11ec-93e6-b9b74775a4c0',
      method: 'GET',
      dataType: 'json',
  
    })
        .then(function(data) {
  
            console.log(data);
            const rate = data.data;
            $.each(rate, function(key) {

                const $option = $("<option></option>");
                $option.val(key);
                $option.text(key);
                $('#currency').append($option);
                
            });
            
            $("form").submit(function(){
                const amount = $("#amount").val();
                const currency = $("#currency").val();
                const currencyRates = rate[currency];
                const result = amount * currencyRates;
                if (amount <= 0 ) {
                    alert("Please enter the number.");
                } else {
                    $("#result").html(amount + " USD is equal to " + result.toFixed(2) + " " + currency);
                    return false;
                }                
            });
          
            
            
        });


        
});
