async function getWeather(){

    let city =
    document.getElementById("cityInput").value;

    let weatherResult =
    document.getElementById("weatherResult");

    if(city===""){

        weatherResult.innerHTML =
        "Please enter a city name";

        return;
    }

    let apiKey = "ae6b32e19e9ed4829068adda58b8dbaf";

    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        let response =
        await fetch(url);

        if(!response.ok){

            throw new Error(
            "City not found"
            );
        }

        let data =
        await response.json();

        weatherResult.innerHTML =

        `
        <div class="weather-card">

            <h2>${data.name}</h2>

            <div class="info-item">
                <span>🌡️ Temperature</span>
                <span>${data.main.temp} °C</span>
            </div>

            <div class="info-item">
                <span>💧 Humidity</span>
                <span>${data.main.humidity}%</span>
            </div>

            <div class="info-item">
                <span>💨 Wind Speed</span>
                <span>${data.wind.speed} m/s</span>
            </div>

            <div class="info-item">
                <span>☁️ Weather</span>
                <span>${data.weather[0].main}</span>
            </div>

        </div>
        `;

    }

    catch(error){

        weatherResult.innerHTML =
        `<p>${error.message}</p>`;
    }

}