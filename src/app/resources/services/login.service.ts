import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseLogin } from '../models/ResponseLogin';
import { RequestLogin } from '../models/RequestLogin';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private authService : AuthService) { }

  doLogin(requestLogin: RequestLogin): Observable<ResponseLogin>{
    return this.httpClient.post<ResponseLogin>(
      'http://localhost:8080/auth', requestLogin
      ).pipe(tap(loginResponse => this.authService.loginResponse = loginResponse))
      ;}
}
