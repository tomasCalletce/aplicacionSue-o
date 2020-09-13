var años;
document.querySelector(".slider").addEventListener("input",(el)=>{

    document.querySelector("#edad-span").innerHTML = document.querySelector(".slider").value;

    años = document.querySelector(".slider").value;
})



function hoursOfSleep(años) {

    let minHorasDeSueño;

    if (años >= 18) {
        minHorasDeSueño = 7.5;
    }
    else if (años >= 14 && años < 18) {
        minHorasDeSueño = 8;
    } else if (años >= 6 && años < 14) {
        minHorasDeSueño = 9;
    } else if (años >= 3 && años < 6) {
        minHorasDeSueño = 10;
    }
    else if (años >= 1 && años < 3) {
        minHorasDeSueño = 11;
    }

    return minHorasDeSueño

}

function calculateSleep() {


   if (años == null){


    document.querySelector(".alert").style.display = "block";
    document.querySelector(".middle-container").style.border = "1px solid red";



       
       return
   }


   document.querySelector(".alert").style.display = "none";
   document.querySelector(".middle-container").style.border = "none";

    

    
    let minHorasDeSueño = hoursOfSleep(años)
 

    console.log(minHorasDeSueño);

    var hours = parseInt(document.getElementById("hora").value);
    if (document.querySelector("#tipoDeHora").value === "pm") {
        hours = hours + 12;
    }
    var minutes = parseInt(document.getElementById("minuto").value);


    var sleepTime = ((1440.0 + (((hours * 60) + (minutes == 00 ? minutes = 0 : minutes)) - (minHorasDeSueño * 60))) - 15);
    console.log("hours " + hours);
    console.log("minutes " + minutes);
    console.log("sleep time in hours: " + sleepTime);
    var allSleepTimes = [
        sleepTime - 90,
        sleepTime,
        sleepTime + 90,
        sleepTime + 180,
    ]
    var result = [];
    for (let i = 0; i < allSleepTimes.length; i++) {
        var n = new Date(0, 0);
        n.setMinutes(+allSleepTimes[i]);
      
        result.push(n.toTimeString().slice(0, 5));
        console.log(result);

    }


    document.querySelector('#respuesta1').innerHTML = `${result[0]}`;
    document.querySelector('#respuesta2').innerHTML = `${result[1]}`;
    document.querySelector('#respuesta3').innerHTML = `${result[2]}`;
    document.querySelector('#respuesta4').innerHTML = `${result[3]}`;




}

