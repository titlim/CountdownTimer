const Days=document.getElementById('Days');
const Hours=document.getElementById('Hours');
const Mins=document.getElementById('Mins');
const Secs=document.getElementById('Secs');


const formattime=(time)=>{
    return time <10 ? `0${time}`:time;
}

const updateCountDown=(deadline)=>{
    const currentTime= new Date();
    const timeDifference=deadline-currentTime;

    //calculate days, hours, mins, secs from timeDifference
    let calSecs=Math.floor(timeDifference/1000) %60;
    let calMins=Math.floor(timeDifference/1000/60)%60;
    let calHours=Math.floor(timeDifference/1000/60/60)%24;
    let calDays=Math.floor(timeDifference/1000/60/24);

    Days.textContent=formattime(calDays);
    Mins.textContent=formattime(calMins);
    Hours.textContent=formattime(calHours);
    Secs.textContent=formattime(calSecs);

    // console.log(calSecs);

    // const formattime=()=>{
    //     return time<10? `0${time}`:time;
    // }
    
}

const countDown=(targerDate)=>{
    setInterval(()=>updateCountDown(targerDate),1000);

}

const targerDate=new Date("august 24 2024 05:00");
countDown(targerDate);
