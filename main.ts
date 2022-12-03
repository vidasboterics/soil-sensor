let moisture = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
})
basic.forever(function () {
    moisture = pins.analogReadPin(AnalogPin.P1)
    if (moisture > 1023) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showIcon(IconNames.Surprised)
    } else if (moisture > 909) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showIcon(IconNames.Happy)
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            # # # # #
            `)
        basic.showIcon(IconNames.Sad)
        music.playMelody("C5 B A G F E D C ", 120)
    }
})
