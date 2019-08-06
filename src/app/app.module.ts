import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from "@angular/router";
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";

import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MenuComponent } from './restaurant/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
    ]),
    BrowserModule,    
    ZXingScannerModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
