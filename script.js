let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let milisecond = document.getElementById('milisecond');
let h = 0, m = 0, s = 0, ms = 0;
let start = document.getElementById('start');
let pause = document.getElementById('pause');
let stop = document.getElementById('stop');
let timer;


function startFn() {
    timer = setInterval(clock, 1);
}

function pauseFn() {
    clearInterval(timer);
}

function stopFn() {
    clearInterval(timer);
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
}

function clock() {
    if (ms >= 999) {
        ms = 0;
        milisecond.innerHTML = '000';
        s++;
        if (s >= 59) {
            s = 0;
            second.innerHTML = '00';
            m++;
            if (m >= 59) {
                m = 0;
                minute.innerHTML = 1;
                h++;
                if (h >= 23) {
                    h = 0;
                    hour.innerHTML = 1;
                }
            }
        }
    } else {
        ms++;
    }

    milisecond.innerHTML = `${ms/100}`.replace('.', '');
    second.innerHTML = `${s/10}`.replace('.', '');
    minute.innerHTML = `${m/10}`.replace('.', '');
    hour.innerHTML = `${h/10}`.replace('.', '');
}
