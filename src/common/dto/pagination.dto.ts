import { isInt, IsOptional, Min, IsPositive, IsNumber } from 'class-validator';

export class PaginationDto {

    @IsOptional()
    @IsNumber()
    @Min(1)
    @IsPositive()
    limit?: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    offset?: number;
}