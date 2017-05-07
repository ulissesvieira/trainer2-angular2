import { Component, OnInit } from '@angular/core';

import { Exercise, ExercisePlan } from "../../../services/model";
import { WorkoutService } from "../../../services/workout-service";
import { WorkoutBuilderService } from "../builder-services/workout-builder-service";

@Component({
    selector: 'left-nav-exercises',
    templateUrl: '/src/components/workout-builder/navigation/left-nav-exercises.component.html'
})

export class LeftNavExercisesComponent implements OnInit {
    public exerciseList: Array<Exercise> = [];

    constructor(
        public workoutService : WorkoutService,
        public workoutBuilderService : WorkoutBuilderService) { }

    ngOnInit() {
        this.exerciseList = this.workoutService.getExercises();
    }

    addExercise(exercise: Exercise) {
        this.workoutBuilderService.addExercise(new ExercisePlan(exercise, 30));
    }
}