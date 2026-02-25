let homePoints = document.getElementById("score-home-display")
let guestPoints = document.getElementById("score-guest-display")
let saveData = document.getElementById("save-data")

let homePointsCount = 0
let guestPointsCount = 0

function checkPoints() {
        if (homePointsCount > guestPointsCount) {
        document.getElementById("score-home-display").style.border = "2px solid green"
        document.getElementById("score-guest-display").style.border = "2px #080001"
    } else  if (homePointsCount == guestPointsCount) {
        document.getElementById("score-home-display").style.border = "2px #080001"
        document.getElementById("score-guest-display").style.border = "2px #080001"
    } else {
        document.getElementById("score-home-display").style.border = "2px #080001"
        document.getElementById("score-guest-display").style.border = "2px solid green"
    }
}

function homeAdd1() {
    homePointsCount +=1
    homePoints.innerText = homePointsCount

    checkPoints()
}

function homeAdd2() {
    homePointsCount +=2
    homePoints.innerText = homePointsCount

    checkPoints()
}

function homeAdd3() {
    homePointsCount +=3
    homePoints.innerText = homePointsCount
    checkPoints()
}

function guestAdd1() {
    guestPointsCount +=1
    guestPoints.innerText = guestPointsCount
    checkPoints()
}

function guestAdd2() {
    guestPointsCount +=2
    guestPoints.innerText = guestPointsCount
    checkPoints()
}

function guestAdd3() {
    guestPointsCount +=3
    guestPoints.innerText = guestPointsCount
    checkPoints()
}

function resetPoints() {
    saveData.innerText += " " + homePointsCount + "/" + guestPointsCount + " + "
    homePointsCount = 0
    guestPointsCount = 0
    homePoints.innerText = homePointsCount
    guestPoints.innerText = guestPointsCount

    document.getElementById("score-home-display").style.border = "2px #080001"
    document.getElementById("score-guest-display").style.border = "2px #080001"
}

