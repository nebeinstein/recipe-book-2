import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'signup-header',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    onSignup(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
    }
}