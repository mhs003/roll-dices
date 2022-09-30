function $(selector) {
    return document.querySelector(selector);
}
function $$(selector) {
    return document.querySelectorAll(selector);
}

// Site loader section

var images_count = $$("img").length;
var iper_etm = 100 / images_count;
var load_count = 0;



for (var i = 0; i < images_count; i++) {
    $$("img")[i].onload = function () {
        load_count += iper_etm;
	//console.log(load_count + "% loaded");
        if (Math.round(load_count) == 100) {
            $("Loader").classList.add('hidden');
        }
    };

}

// Main section
var k = 0;

roll_dice();

$('button').onclick = function () {
    $('GameStatus').textContent = "Rolling...";
    $('#p-1').classList.remove('win');
    $('#p-2').classList.remove('win');
    roll_dice();
}

function roll_dice() {
    var rand0 = getRand();
    var rand1 = getRand();

    if (k < 10) {
        $$('img')[0].src = "images/" + rand0 + ".jpg";
        $$('img')[1].src = "images/" + rand1 + ".jpg";
        setTimeout(roll_dice, 90);
        k++;
    } else {
        k = 0;
    }
    if (k == 10) {
        $$('img')[0].src = "images/" + rand0 + ".jpg";
        $$('img')[1].src = "images/" + rand1 + ".jpg";

        var gstatus = ""
        if (rand0 > rand1) {
            gstatus = "🚩 Player 1 wins!";
            $('#p-1').classList.add('win');
        } else if (rand0 < rand1) {
            gstatus = "Player 2 wins! 🚩";
            $('#p-2').classList.add('win');
        } else if (rand0 == rand1) {
            gstatus = "🏳 Draw! 🏳";
        }

        $('GameStatus').textContent = gstatus;
    }
}

function getRand() {
    return Math.floor(Math.floor(18 * Math.random()) / 3) + 1;
}

