let signal = 0
basic.forever(function () {
    if (signal == 0) {
        pins.analogWritePin(AnalogPin.P0, 1000)
        pins.analogWritePin(AnalogPin.P1, 500)
        pins.analogWritePin(AnalogPin.P2, 100)
    }
    if (signal == 1) {
        pins.analogWritePin(AnalogPin.P0, 1000)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
    }
    if (signal == 2) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 500)
        pins.analogWritePin(AnalogPin.P2, 0)
    }
    if (signal == 3) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 100)
    }
})
basic.forever(function () {
    signal = 1
    basic.pause(5000)
    signal = 2
    basic.pause(2000)
    signal = 3
    basic.pause(5000)
})
