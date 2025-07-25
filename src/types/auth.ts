export interface ApiResponse<T = unknown> {
  data: T;
  message: string;
  status: number;
}

export interface LoginRequest {
  username?: string;
  email?: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  full_name: string;
  date_of_birth: string;
}

export interface UserInfo {
  username: string;
  email: string;
  full_name: string;
  avatar?: string;
  bio?: string;
  account_id: string;
  status: "active" | "inactive" | "banned";
  role: {
    role_id: number;
    role_name: "user" | "moderator" | "admin";
    status: "active" | "inactive";
  };
  email_verified: boolean;
  date_of_birth?: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token?: string;
  token_type: string;
  user?: UserInfo;
}

export interface ErrorResponse {
  detail: string;
  status_code: number;
}

export interface RefreshTokenRequest {
  refresh_token: string;
}

export interface RefreshTokenResponse {
  access_token: string;
  token_type: string;
}
