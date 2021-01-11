const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: Date,
    exercises: [
      {
        type: {
            type: String,
            required: "What kind?",
            default: "cardio"
        },
        name: {
            type: String,
            required: "name the excersze please", 
            default: "Sweet exercise"
        },
        duration: {
            type: Number,
            required: "enter your minutes",
            default: 7000
        },
        weight: Number,
        reps: Number,
        sets: Number
      }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;