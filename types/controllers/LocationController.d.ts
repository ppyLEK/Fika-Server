import { ILocationsGenerateAllResponse } from "@spt/models/eft/common/ILocationsSourceDestinationBase";
import { IGetAirdropLootResponse } from "@spt/models/eft/location/IGetAirdropLootResponse";
import { ILocationConfig } from "@spt/models/spt/config/ILocationConfig";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { ConfigServer } from "@spt/servers/ConfigServer";
import { AirdropService } from "@spt/services/AirdropService";
import { DatabaseService } from "@spt/services/DatabaseService";
import { ICloner } from "@spt/utils/cloners/ICloner";
export declare class LocationController {
    protected logger: ILogger;
    protected databaseService: DatabaseService;
    protected airdropService: AirdropService;
    protected configServer: ConfigServer;
    protected cloner: ICloner;
    protected locationConfig: ILocationConfig;
    constructor(logger: ILogger, databaseService: DatabaseService, airdropService: AirdropService, configServer: ConfigServer, cloner: ICloner);
    /**
     * Handle client/locations
     * Get all maps base location properties without loot data
     * @param sessionId Players Id
     * @returns ILocationsGenerateAllResponse
     */
    generateAll(sessionId: string): ILocationsGenerateAllResponse;
    /** Handle client/airdrop/loot */
    getAirdropLoot(): IGetAirdropLootResponse;
}
