const correctPassword = "skip"; 


function startCountdown() {

    const color = 'white';
    const inputPassword = document.querySelector('input[type="text"]').value;
    
    if (inputPassword === correctPassword) {
        document.getElementById('landing-page').style.display = 'none';
        document.getElementById('countdown').style.display = 'flex';
        document.getElementById('h1').style.display = 'flex';
        document.getElementById('logo').style.display = 'flex';
        document.body.style.backgroundColor = color;
        document.body.style.backgroundImage = 'none'; 
    }

    

    
}

const days  = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`September 1 ${currentYear} 00:00:00`);


//Update Countdowntime
function updateCountdowntime(){

    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;

}

setInterval(updateCountdowntime, 1000)