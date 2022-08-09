let weather = {
   appid : "94589462d086c672d5149ed5d0854f1b",       
   fetchWeather:  function (city) {
      fetch( 
         "https://api.openweathermap.org/data/2.5/weather?q=" + city + 
          "&units=metric&appid=94589462d086c672d5149ed5d0854f1b" )    
        .then((Response) => Response.json())
      .then((data) =>  this.displayWeather(data))
   },
   displayWeather: function(data){
     const { name } = data;
     const { icon, description } = data.weather[0];
     const { temp, humidity } = data.main;
     const{ speed } = data.wind;
   //   console.log(name,icon,description,temp,humidity,speed);
     document.querySelector(".city").innerText = "Weather in " + name;
     document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png" ;
     document.querySelector(".temp").innerText = temp + " °C";
     document.querySelector(".humidity").innerText = "Humidity  : " + humidity + "%";
     document.querySelector(".speed").innerText = "wind speed : " + speed ;
   
},
search : function(){   /* search functions get the data from the search bar */
   this.fetchWeather(document.querySelector(".search-box").value);
},
};

document.querySelector(".search button")  /*when search icon is clicked the data is sent */
.addEventListener("click", function()
{
weather.search();
});