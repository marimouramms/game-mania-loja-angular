import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
    {path: 'body', component: BodyComponent},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/inicio', pathMatch: 'full' }

]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
