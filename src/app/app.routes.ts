import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];