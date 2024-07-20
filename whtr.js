// const API_KEY = '1b8c3caff5870ebb0bf69324644581b6';

// async function weather() {
//     let city = 'Udaipur';  // Add quotes around the city name
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
//     const data = await response.json();
//     console.log("Weather data:->", data);

//     // Display temperature in Celsius
//     let newPara = document.createElement('p');
//     newPara.textContent = `${data?.main?.temp.toFixed(2)}°C`;  // Use backticks for template literals
//     document.body.appendChild(newPara);
// }

// weather();
// function getlocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             showPosition,
//             handleGeolocationError,
//             { enableHighAccuracy: true }
//         );
//     } else {
//         console.log("NO GEOLOGICAL SUPPORT");
//     }
// }

// function showPosition(position) {
//     let lat = position.coords.latitude;
//     let longi = position.coords.longitude;
//     console.log("Latitude: " + lat);
//     console.log("Longitude: " + longi);
// }

// function handleGeolocationError(error) {
//     switch (error.code) {
//         case error.PERMISSION_DENIED:
//             console.log("User denied the request for geolocation.");
//             break;
//         case error.POSITION_UNAVAILABLE:
//             console.log("Location information is unavailable.");
//             break;
//         case error.TIMEOUT:
//             console.log("The request to get user location timed out.");
//             break;
//         case error.UNKNOWN_ERROR:
//             console.log("An unknown error occurred.");
//             break;
//     }
// }

// // Call the getlocation function to initiate geolocation retrieval
// getlocation();

// const usertab = document.querySelector(".yourweather");
// const searchtab = document.querySelector(".searchweather");

// const usercontainer = document.querySelector(".inputcontainer");
// const grantaccesscontainer = document.querySelector(".getlocationcontainer");
// const grantbuttn = document.querySelector(".grantbutton");
// const searchform = document.querySelector(".formcontainer");
// const loadingtab = document.querySelector(".loadingcontainer");
// const userinfocontainer = document.querySelector(".weatherinfo");
// const searchforminput = document.querySelector(".inputsearchform");

// let currenttab = usertab;
// const API_KEY = '1b8c3caff5870ebb0bf69324644581b6';
// currenttab.classList.add("current-tab");
// function switchtab(clickedtab) {
//     if (!clickedtab) {
//         console.error("Clicked tab is null or undefined.");
//         return;
//     }

//     if (clickedtab != currenttab) {
//         currenttab.classList.remove("current-tab");
//         currenttab = clickedtab;
//         currenttab.classList.add("current-tab");

//         if (!searchform.classList.contains("active")) {
//             userinfocontainer.classList.remove("active");
//             grantaccesscontainer.classList.remove("active");
//             searchform.classList.add("active");
//         } else {
//             grantaccesscontainer.classList.remove("active");
//             searchform.classList.remove("active");
//             getfromsessionstorage();
//         }
//     }
// }

// document.querySelector(".yourweather").addEventListener("click", () => {
//     switchtab(usertab);
// });

// document.querySelector(".searchweather").addEventListener("click", () => {
//     switchtab(searchtab);
// });



// function getfromsessionstorage() {
//     const localcoordinates = sessionStorage.getItem("user-coordinates");
//     if (!localcoordinates) {
//         grantaccesscontainer.classList.add("active");
//     } else {
//         const coordinates = JSON.parse(localcoordinates);
//         fetchuserweatherinfo(coordinates);
//     }
// }

// async function fetchuserweatherinfo(coordinates) {
//     const { lat, lon } = coordinates;
//     grantaccesscontainer.classList.remove("active");
//     loadingtab.classList.add("active");
//     try {
//         const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
//         );
//         const data = await response.json();
//         loadingtab.classList.remove("active");
//         userinfocontainer.classList.add("active");
//         renderweatherinfo(data);
//     } catch (err) {
//         loadingtab.classList.remove("active");
//         console.error(err);
//     }
// }

// function renderweatherinfo(weatherInfo) {
//     // Update city name and flag
//     const cityNameElement = document.querySelector(".place");
//     cityNameElement.textContent = weatherInfo?.name || "City Not Available";

//     const countryFlagElement = document.querySelector(".countryflag");
//     countryFlagElement.src = `https://flagcdn.com/32x24/${weatherInfo?.sys?.country.toLowerCase()}.png`;

//     // Update description, icon, and temperature
//     const weatherDescriptionElement = document.querySelector(".weatherdisc");
//     weatherDescriptionElement.textContent = weatherInfo.weather?.[0].description || "Weather Description Not Available";

//     const weatherIconElement = document.querySelector(".weathericon");
//     weatherIconElement.src = `https://openweathermap.org/img/wn/${weatherInfo?.weather?.[0]?.icon}.png`;

//     const temperatureElement = document.querySelector(".temperature");
//     const temperatureInCelsius = Math.round(weatherInfo.main.temp - 273.15);
//     temperatureElement.textContent = `${temperatureInCelsius}°C`;

//     // // Update wind speed
//     // const windSpeedIconElement = document.querySelector(".windspeedicon");
//     // windSpeedIconElement.src = weatherInfo.wind_speed_icon_url || "";

//     // const windSpeedValueElement = document.querySelector(".windspeedvalue");
//     // windSpeedValueElement.textContent = `${weatherInfo.wind.speed} m/s`;

//     // // Update humidity
//     // const humidityIconElement = document.querySelector(".humidityicon");
//     // humidityIconElement.src = weatherInfo.humidity_icon_url || "";

//     // const humidityValueElement = document.querySelector(".humidityvalue");
//     // humidityValueElement.textContent = `${weatherInfo.main.humidity}%`;

//     // // Update cloud
//     // const cloudIconElement = document.querySelector(".cloudicon");
//     // cloudIconElement.src = weatherInfo.cloud_icon_url || "";

//     // const cloudValueElement = document.querySelector(".cloudvalue");
//     // cloudValueElement.textContent = `${weatherInfo.cloud_value}`;

//     // // Make the weatherinfo div visible
//     // const weatherInfoContainer = document.querySelector(".weatherinfo");
//     // weatherInfoContainer.classList.add("active");
// }

// function getlocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         console.log("NO GEOLOGICAL SUPPORT");
//     }
// }

// function showPosition(position) {
//     const usercoordinates = {
//         lat: position.coords.latitude,
//         lon: position.coords.longitude
//     };

//     sessionStorage.setItem("user-coordinates", JSON.stringify(usercoordinates));
//     fetchuserweatherinfo(usercoordinates);
// }

// grantbuttn.addEventListener("click", getlocation);

// searchform.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let cityname = searchforminput.value;
//     if (cityname === "") return;
//     else fetchsearchweatherinfo(cityname);
// });

// async function fetchsearchweatherinfo(city) {
//     loadingtab.classList.add("active");
//     userinfocontainer.classList.remove("active");
//     grantaccesscontainer.classList.remove("active");

//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
//         const data = await response.json();
//         loadingtab.classList.remove("active");
//         userinfocontainer.classList.add("active");
//         renderweatherinfo(data);
//     } catch (err) {
//         console.error(err);
//     }
// }



const usertab = document.querySelector(".yourweather");
const searchtab = document.querySelector(".searchweather");

const usercontainer = document.querySelector(".inputcontainer");
const grantaccesscontainer = document.querySelector(".getlocationcontainer");
const grantbuttn = document.querySelector(".grantbutton");
const searchform = document.querySelector(".formcontainer");
const loadingtab = document.querySelector(".loadingcontainer");
const userinfocontainer = document.querySelector(".weatherinfo");
const searchforminput = document.querySelector(".inputsearchform");

let currenttab = usertab;
const API_KEY = '1b8c3caff5870ebb0bf69324644581b6';
currenttab.classList.add("current-tab");


function switchtab(clickedtab) {
    if (!clickedtab) {
        console.error("Clicked tab is null or undefined.");
        return;
    }

    if (clickedtab != currenttab) {
        currenttab.classList.remove("current-tab");
        currenttab = clickedtab;
        currenttab.classList.add("current-tab");

        // Hide all containers initially
        usercontainer.classList.remove("active");
        grantaccesscontainer.classList.remove("active");
        searchform.classList.remove("active");
        loadingtab.classList.remove("active");
        userinfocontainer.classList.remove("active");

        if (clickedtab === searchtab) {
            grantaccesscontainer.classList.remove("active");
        }


        if (!searchform.classList.contains("active")) {
         
            searchform.classList.add("active");
        } else {
            getfromsessionstorage();
        }
    }
    else{
        searchform.classList.remove("active");
        grantaccesscontainer.classList.add("active");
    }
}

document.querySelector(".yourweather").addEventListener("click", () => {
    switchtab(usertab);
});

document.querySelector(".searchweather").addEventListener("click", () => {
    switchtab(searchtab);
});

function getfromsessionstorage() {
    const localcoordinates = sessionStorage.getItem("user-coordinates");
    if (!localcoordinates) {
        grantaccesscontainer.classList.add("active");
    } else {
        const coordinates = JSON.parse(localcoordinates);
        fetchuserweatherinfo(coordinates);
    }
}

async function fetchuserweatherinfo(coordinates) {
    const { lat, lon } = coordinates;
    grantaccesscontainer.classList.remove("active");
    loadingtab.classList.add("active");
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );
        const data = await response.json();
        loadingtab.classList.remove("active");
        userinfocontainer.classList.add("active");
        renderweatherinfo(data);
    } catch (err) {
        loadingtab.classList.remove("active");
        console.error(err);
    }
}
function renderweatherinfo(weatherInfo) {
    // Update city name and flag
    const cityNameElement = document.querySelector(".place");
    cityNameElement.textContent = weatherInfo?.name || "City Not Available";

    const countryFlagElement = document.querySelector(".countryflag");
    countryFlagElement.src = `https://flagcdn.com/32x24/${weatherInfo?.sys?.country.toLowerCase()}.png`;

    // Update description, icon, and temperature
    const weatherDescriptionElement = document.querySelector(".weatherdisc");
    weatherDescriptionElement.textContent = weatherInfo.weather?.[0].description || "Weather Description Not Available";

    const weatherIconElement = document.querySelector(".weathericon");
    weatherIconElement.src = `https://openweathermap.org/img/wn/${weatherInfo?.weather?.[0]?.icon}.png`;

    const temperatureElement = document.querySelector(".temperature");
    const temperatureInCelsius = Math.round(weatherInfo.main.temp - 273.15);
    temperatureElement.textContent = `${temperatureInCelsius}°C`;

    // Update wind speed
   
    const windSpeedValueElement = document.querySelector(".windspeedvalue");
    windSpeedValueElement.textContent =  `${weatherInfo?.wind?.speed.toFixed(2)}m/s`;

    // Update humidity
   


    const humidityValueElement = document.querySelector(".humidityvalue");
    humidityValueElement.textContent = `${weatherInfo?.main?.humidity}%`;

    // Update cloud
    
    
    const cloudValueElement = document.querySelector(".cloudvalue");
    cloudValueElement.textContent = `${weatherInfo?.clouds?.all}%`;

    // Make the weatherinfo div visible
    searchform.classList.remove("active");
    const weatherInfoContainer = document.querySelector(".weatherinfo");
    weatherInfoContainer.classList.add("active");
}

function getlocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("NO GEOLOGICAL SUPPORT");
    }
    
}

function showPosition(position) {
    const usercoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
    };

    sessionStorage.setItem("user-coordinates", JSON.stringify(usercoordinates));
    fetchuserweatherinfo(usercoordinates);
}

grantbuttn.addEventListener("click", getlocation);

searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityname = searchforminput.value;
    if (cityname === "") return;
    else fetchsearchweatherinfo(cityname);
});

async function fetchsearchweatherinfo(city) {
    loadingtab.classList.add("active");
    userinfocontainer.classList.remove("active");
    grantaccesscontainer.classList.remove("active");

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data = await response.json();
        
        loadingtab.classList.remove("active");
        userinfocontainer.classList.add("active");
        renderweatherinfo(data);
    } catch (err) {
        console.error(err);
    }
}

