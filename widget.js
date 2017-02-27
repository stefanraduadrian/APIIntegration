"use strict";
$.ajax
({
    url: 'deva.json',
    dataType: 'json',
    type: 'get',
    cache: true,
    success: function(data) 
    {
        var listOfHotels = data.HotelListResponse.HotelList.HotelSummary;
        var numberOfHotels = data.HotelListResponse.HotelList['@size'];
        $(listOfHotels).each(function(index, value) 
        {
            console.log(index, value);
            var nameOfHotel = value.name;
            var hotelAddress = value.address1;
            var hotelCity = value.city;
            var hotelPostalCode = value.postalCode;
            var hotelCountryCode = value.countryCode;
            var hotelImage = "http://media.expedia.com"+ value.thumbNailUrl;
            var lowRate = value.lowRate;
            var currency = value.rateCurrencyCode;
  
            $('.hotel-wrap').append('<div class="hotel-details"><h3 class="hotel-names"><a class="hotel-name" href="HOTEL INFO CALL" target="_blank">'+  nameOfHotel +'</a></h3><div class="hotel-location"><p class="hotel-address"><span class="p-street-address">'+  hotelAddress + ',' + '</span><span class="p-locality">'+  hotelCity + ',' +'</span><span class="p-postal-code">'+  hotelPostalCode +'</span><span class="p-country-name">'+  hotelCountryCode +'</span></p></div><div class="hotel-image"><span><img class="main-image" src='+hotelImage+'></span></div><div class="rates"><span><p class="low-rate">'+ lowRate + currency + ' <br> nightly price</p></span></div></div>'); 
            
            
            
            
            
        });
     }
});   
/*
function myFunction() {
    var x = document.getElementById("checkin").value;
    document.getElementById("demo").innerHTML = x;
    document.getElementById("checkin").defaultValue = new Date().toDateInputValue();
}


Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});


*/
