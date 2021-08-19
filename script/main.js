$(document).ready(function () {
    let currentFloor = 2;
    const 
        floorPath = $('.home-img path'),
        counterUp = $('.arrow-up'),
        counterDown = $('.arrow-down'),
        selectFloor = () => {
            const usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false })
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${currentFloor}]`).toggleClass('current-floor');
        };
    floorPath.on('mouseover', function() {
        currentFloor = $(this).attr('data-floor');
        selectFloor();
    });
    counterUp.on('click', () => {
        if(currentFloor < 18) {
            currentFloor++;
            selectFloor();
        }
    });
    counterDown.on('click', () => {
        if(currentFloor > 2) {
            currentFloor--;
            selectFloor();
        }
    });
    selectFloor();
});