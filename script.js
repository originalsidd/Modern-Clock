const hourHand = document.getElementsByClassName('hr')[0];
const minuteHand = document.getElementsByClassName('min')[0];
const secondHand = document.getElementsByClassName('sec')[0];
const allNum = document.getElementsByClassName('number');
const clock = document.getElementsByClassName('clock')[0];

for (let num of allNum) {
    num.style.transform = `rotate(${30 * num.innerText}deg)`;
}
for (let count = 0; count < 60; count++) {
    const bar = document.createElement('div');
    clock.appendChild(bar);
    bar.innerText = 'I';
    bar.classList.add('bar_item');
    bar.style.transform = `rotate(${6 * count}deg)`;
    if (count % 5 == 0) {
        bar.style.color = 'rgb(250, 30, 169, 0.8)';
        bar.style.fontWeight = 'bold';
    }
}

const setRotation = (element, rotationRatio) => {
    element.style.setProperty('--rotation', rotationRatio * 360);
};

const setClock = () => {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
};

setClock();
setInterval(setClock, 1000);
