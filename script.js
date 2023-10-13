// // // // const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
// // // // const options = {
// // // // 	method: 'GET',
// // // // 	headers: {
// // // // 		'X-RapidAPI-Key': 'n8Wu7uHteLtj1zwk9maNtg==WT59bM1VsrkXuC2O',
// // // // 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// // // // 	}
// // // // };

// // // // async function fetchData(){

// // // //     try {
// // // //         const response = await fetch(url, options);
// // // //         const result = await response.text();
// // // //         console.log(result);
// // // //     } catch (error) {
// // // //         console.error(error);
// // // //     }
// // // // }
// // // // console.log(fetchData)
// // // // const fetch = ('node-fetch'); // For Node.js environment

// // // const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
// // // const options = {
// // // 	method: 'GET',
// // // 	headers: {
// // // 		'X-RapidAPI-Key': 'c06e3758e2msh7a7cfa9bc138921p16e313jsn886917077740',
// // // 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// // // 	}
// // // };
// // // async function fetchData(){

// // //     try {
// // //         const response = await fetch(url, options);
// // //         const result = await response.text();
// // //         console.log(result);
// // //     } catch (error) {
// // //         console.error(error);
// // //     }
// // // }
// // // // fetchData();

// // const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
// // const options = {
// //     method: 'GET',
// //     headers: {
// //         'X-RapidAPI-Key': 'c06e3758e2msh7a7cfa9bc138921p16e313jsn886917077740',
// //         'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// //     }
// // };

// // async function fetchData() {
// //     try {
// //         const response = await fetch(url, options);
// //         const result = await response.text();
// //         console.log(result);
// //     } catch (error) {
// //         console.error(error);
// //     }
// // }
// // fetchData();

// const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'c06e3758e2msh7a7cfa9bc138921p16e313jsn886917077740',
//         'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
//     }
// };

// async function fetchData() {
//     try {
//         const response = await fetch(url, options);

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error('An error occurred:', error.message);
//     }
// }

// fetchData();
const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};


const getweather =(city)=>{
    cityName.innerHTML= city
fetch(url +city , options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    cloud_pct.innerHTML = response.cloud_pct;
    temp.innerHTML = response.temp;
    temp2.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    humidity2.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML = response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    // sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getweather(city.value)
})
getweather("Delhi");


fetch(url +"Kolkata" , options)
  .then((response) => response.json())
  .then((response) => {
    
    document.getElementById('Kolkata1').innerHTML = response.cloud_pct
    document.getElementById('Kolkata2').innerHTML = response.feels_like
    document.getElementById('Kolkata3').innerHTML = response.humidity
    document.getElementById('Kolkata4').innerHTML = response.max_temp
    document.getElementById('Kolkata5').innerHTML = response.min_temp
    document.getElementById('Kolkata6').innerHTML = response.sunrise
    document.getElementById('Kolkata7').innerHTML = response.sunset
    document.getElementById('Kolkata8').innerHTML = response.temp
    document.getElementById('Kolkata9').innerHTML = response.wind_degrees
    document.getElementById('Kolkata10').innerHTML = response.wind_speed
  })
  .catch((err) => console.error(err));
fetch(url +"Gujrat" , options)
  .then((response) => response.json())
  .then((response) => {
   
    document.getElementById('Gujrat1').innerHTML = response.cloud_pct
    document.getElementById('Gujrat2').innerHTML = response.feels_like
    document.getElementById('Gujrat3').innerHTML = response.humidity
    document.getElementById('Gujrat4').innerHTML = response.max_temp
    document.getElementById('Gujrat5').innerHTML = response.min_temp
    document.getElementById('Gujrat6').innerHTML = response.sunrise
    document.getElementById('Gujrat7').innerHTML = response.sunset
    document.getElementById('Gujrat8').innerHTML = response.temp
    document.getElementById('Gujrat9').innerHTML = response.wind_degrees
    document.getElementById('Gujrat10').innerHTML = response.wind_speed
  })
  .catch((err) => console.error(err));
fetch(url +"Kerala" , options)
  .then((response) => response.json())
  .then((response) => {
  
    document.getElementById('Kerala1').innerHTML = response.cloud_pct
    document.getElementById('Kerala2').innerHTML = response.feels_like
    document.getElementById('Kerala3').innerHTML = response.humidity
    document.getElementById('Kerala4').innerHTML = response.max_temp
    document.getElementById('Kerala5').innerHTML = response.min_temp
    document.getElementById('Kerala6').innerHTML = response.sunrise
    document.getElementById('Kerala7').innerHTML = response.sunset
    document.getElementById('Kerala8').innerHTML = response.temp
    document.getElementById('Kerala9').innerHTML = response.wind_degrees
    document.getElementById('Kerala10').innerHTML = response.wind_speed
  })
  .catch((err) => console.error(err));
fetch(url +"Chennai" , options)
  .then((response) => response.json())
  .then((response) => {
   
    document.getElementById('Chennai1').innerHTML = response.cloud_pct
    document.getElementById('Chennai2').innerHTML = response.feels_like
    document.getElementById('Chennai3').innerHTML = response.humidity
    document.getElementById('Chennai4').innerHTML = response.max_temp
    document.getElementById('Chennai5').innerHTML = response.min_temp
    document.getElementById('Chennai6').innerHTML = response.sunrise
    document.getElementById('Chennai7').innerHTML = response.sunset
    document.getElementById('Chennai8').innerHTML = response.temp
    document.getElementById('Chennai9').innerHTML = response.wind_degrees
    document.getElementById('Chennai10').innerHTML = response.wind_speed
  })
  .catch((err) => console.error(err));
fetch(url +"Meghalaya" , options)
  .then((response) => response.json())
  .then((response) => {
    
    document.getElementById('Meghalaya1').innerHTML = response.cloud_pct
    document.getElementById('Meghalaya2').innerHTML = response.feels_like
    document.getElementById('Meghalaya3').innerHTML = response.humidity
    document.getElementById('Meghalaya4').innerHTML = response.max_temp
    document.getElementById('Meghalaya5').innerHTML = response.min_temp
    document.getElementById('Meghalaya6').innerHTML = response.sunrise
    document.getElementById('Meghalaya7').innerHTML = response.sunset
    document.getElementById('Meghalaya8').innerHTML = response.temp
    document.getElementById('Meghalaya9').innerHTML = response.wind_degrees
    document.getElementById('Meghalaya10').innerHTML = response.wind_speed
  })
  .catch((err) => console.error(err));
fetch(url +"Shimla" , options)
  .then((response) => response.json())
  .then((response) => {
  
    document.getElementById('Shimla1').innerHTML = response.cloud_pct
    document.getElementById('Shimla2').innerHTML = response.feels_like
    document.getElementById('Shimla3').innerHTML = response.humidity
    document.getElementById('Shimla4').innerHTML = response.max_temp
    document.getElementById('Shimla5').innerHTML = response.min_temp
    document.getElementById('Shimla6').innerHTML = response.sunrise
    document.getElementById('Shimla7').innerHTML = response.sunset
    document.getElementById('Shimla8').innerHTML = response.temp
    document.getElementById('Shimla9').innerHTML = response.wind_degrees
    document.getElementById('Shimla10').innerHTML = response.wind_speed
  })
  .catch((err) => console.error(err));
