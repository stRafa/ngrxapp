import { createActionGroup, props } from "@ngrx/store";
import { IRegisterRequest } from "../types/registerRequest.interface";
import { ICurrentUser } from "../../shared/types/currentUser.interface";
import { IBackendErrors } from "../../shared/types/backendErrors.interface";

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    Register: props<{request: IRegisterRequest}>(),
    'Register Success': props<{currentUser: ICurrentUser}>(),
    'Register Failure': props<{errors: IBackendErrors}>()
  }
})



// export const register = createAction(
//   '[Auth] Register',
//   props<{request: IRegisterRequest}>()
// )
