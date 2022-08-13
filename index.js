function shout(hello) {
    return "hello".toUpperCase();
}

function whisper(hello) {
    return "hello".toLowerCase();
}

function logShout(hello) {
    console.log ("hello".toUpperCase());
}

function logWhisper(hello){
    console.log ("hello".toLowerCase());
}

function sayHiToHeadphonedRoommate (hello){
    var cantAnswer ="I can\'t hear you!";
    var yesAnswer = "YES INDEED!";
    var loveAnswer ="I would love to!";
    if (hello.toLowerCase(hello)=== hello){
        return cantAnswer;
    }
    else if (hello.toUpperCase(hello)===hello){
        return yesAnswer;
    }
    else if (hello ===hello){
        return loveAnswer
    }
}
