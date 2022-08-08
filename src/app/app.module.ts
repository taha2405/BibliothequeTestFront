import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user-auth/login/login.component';
import { UserAddComponent } from './user/user-add/user-add.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
     UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
