let lon;
let lat;
let temperature = document.querySelector(".temp")
let ciudad = document.querySelector(".name")
let state = document.querySelector(".state")  
let pais = document.querySelector(".ciudad")
let temp_maxmin = document.querySelector(".temp2")
let kelvin = 273.15;
let city = document.getElementById('city')
let boton = document.getElementById('btn')
let humidity_level = document.querySelector(".humidity_level")
let wind_force = document.querySelector(".wind_force")

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>
        {
            console.log(position)
            lon= position.coords.longitude;
            lat= position.coords.latitude;

            const api = "27287355ca07526d40d6778cbc3865e5"
            const url_base =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;

            fetch(url_base)
            .then((Response)=>{

                return Response.json();
            })
            .then((data)=> {
                console.log(data);

                temperature.textContent =Math.floor(data.main.temp-kelvin)+"°C";
                state.textContent = data.weather[0].description; 
                ciudad.textContent = data.name;
                pais.textContent =data.sys.country;
                temp_maxmin.textContent= Math.floor(data.main.temp_min-kelvin)+"/"+Math.floor(data.main.temp_max-kelvin)+"°C";
                humidity_level.textContent = Math.floor(data.main.humidity)+"%";
                wind_force.textContent = data.wind.speed;          
              })
              let get_weather= ()=>{
                let city_name = city.value;
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api}`
                fetch(url).then((resp)=> resp.json()).then(data =>{
                temperature.textContent =Math.floor(data.main.temp-kelvin)+"°C";
                state.textContent = data.weather[0].description; 
                ciudad.textContent = data.name;
                pais.textContent =data.sys.country;
                temp_maxmin.textContent= Math.floor(data.main.temp_min-kelvin)+"/"+Math.floor(data.main.temp_max-kelvin)+"°C";
                humidity_level.textContent = Math.floor(data.main.humidity)+"%";
                wind_force.textContent = data.wind.speed;
                })
            }
            boton.addEventListener('click',get_weather);
            })
    }
