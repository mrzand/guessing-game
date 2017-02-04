class GuessingGame {
    setRange(min, max) {
        this.min= min + 1;
        this.max = max - 1;
    }
    guess() {
        this.result= Math.round((this.min + this.max) / 2);
        return this.result;
    }
    lower() {
        this.max= this.result - 1;
    }
    greater() {
        this.min= this.result + 1;
    }
}
module.exports = GuessingGame;
