const database = DatabaseServer.tables

class lootprogression
{
  constructor ()
  {
    this.mod = ModLoader.getModPath["Kobrakon-LootProgression"]
    ModLoader.onLoad[this.mod] = this.load.bind(this)
    HttpRouter.onStaticRoute["/client/game/start"] = Object.assign({"Interceptor": lootprogression.intercept}, HttpRouter.onStaticRoute["/client/game/start"])
    HttpRouter.onStaticRoute["/client/match/join"]["Interceptor"] = lootprogression.intercept // run on raid start
    HttpRouter.onStaticRoute["/client/match/exit"]["Interceptor"] = lootprogression.intercept // run on raid end
  }
  
  load(){}
  
  static intercept(url, info, sessionID)
  {
    doTheThing(sessionID)
  }
  
  static doTheThing (sessionID)
  {
    let pmcData = ProfileController.getPmcProfile(sessionID)
    
    if (!pmcData.Info)
    {
      return
    }
    
    if (pmcData.Info.Level <= 14) 
    {
      LocationConfig.looseLootMultiplier.bigmap = 0.4
      LocationConfig.looseLootMultiplier.factory4_day = 0.4
      LocationConfig.looseLootMultiplier.factory4_night = 1.2
      LocationConfig.looseLootMultiplier.interchange = 1
      LocationConfig.looseLootMultiplier.laboratory = 1
      LocationConfig.looseLootMultiplier.rezervbase = 1.5
      LocationConfig.looseLootMultiplier.shoreline = 1.2
      LocationConfig.looseLootMultiplier.woods = 0.8
      LocationConfig.looseLootMultiplier.lighthouse = 1.5
      
      LocationConfig.staticLootMultiplier.bigmap = 0.5
      LocationConfig.staticLootMultiplier.factory4_day = 0.5
      LocationConfig.staticLootMultiplier.factory4_night = 1.3
      LocationConfig.staticLootMultiplier.interchange = 1
      LocationConfig.staticLootMultiplier.laboratory = 1
      LocationConfig.staticLootMultiplier.rezervbase = 1.4
      LocationConfig.staticLootMultiplier.shoreline = 1.2
      LocationConfig.staticLootMultiplier.woods = 0.8
      LocationConfig.staticLootMultiplier.lighthouse = 1.5
    }
    
    if (pmcData.Info.Level >= 15)
    {
      LocationConfig.looseLootMultiplier.bigmap = 0.6
      LocationConfig.looseLootMultiplier.factory4_day = 0.6
      LocationConfig.looseLootMultiplier.factory4_night = 1.2
      LocationConfig.looseLootMultiplier.interchange = 1.1
      LocationConfig.looseLootMultiplier.laboratory = 1.2
      LocationConfig.looseLootMultiplier.rezervbase = 1.4
      LocationConfig.looseLootMultiplier.shoreline = 1.2
      LocationConfig.looseLootMultiplier.woods = 0.8
      LocationConfig.looseLootMultiplier.lighthouse = 1.4
      
      LocationConfig.staticLootMultiplier.bigmap = 0.7
      LocationConfig.staticLootMultiplier.factory4_day = 0.7
      LocationConfig.staticLootMultiplier.factory4_night = 1.3
      LocationConfig.staticLootMultiplier.interchange = 1
      LocationConfig.staticLootMultiplier.laboratory = 1.1
      LocationConfig.staticLootMultiplier.rezervbase = 1.3
      LocationConfig.staticLootMultiplier.shoreline = 1.2
      LocationConfig.staticLootMultiplier.woods = 0.8
      LocationConfig.staticLootMultiplier.lighthouse = 1.4
    }
    
    if (pmcData.Info.Level >= 25) 
    {
      LocationConfig.looseLootMultiplier.bigmap = 0.9
      LocationConfig.looseLootMultiplier.factory4_day = 0.9
      LocationConfig.looseLootMultiplier.factory4_night = 1.2
      LocationConfig.looseLootMultiplier.interchange = 1.5
      LocationConfig.looseLootMultiplier.laboratory = 1.3
      LocationConfig.looseLootMultiplier.rezervbase = 1.3
      LocationConfig.looseLootMultiplier.shoreline = 1.2
      LocationConfig.looseLootMultiplier.woods = 0.8
      LocationConfig.looseLootMultiplier.lighthouse = 1.3
      
      LocationConfig.staticLootMultiplier.bigmap = 1
      LocationConfig.staticLootMultiplier.factory4_day = 1
      LocationConfig.staticLootMultiplier.factory4_night = 1.3
      LocationConfig.staticLootMultiplier.interchange = 1.3
      LocationConfig.staticLootMultiplier.laboratory = 1.1
      LocationConfig.staticLootMultiplier.rezervbase = 1.2
      LocationConfig.staticLootMultiplier.shoreline = 1.2
      LocationConfig.staticLootMultiplier.woods = 0.8
      LocationConfig.staticLootMultiplier.lighthouse = 1.3
    }

    if (pmcData.Info.Level >= 35) 
    {
      LocationConfig.looseLootMultiplier.bigmap = 1.1
      LocationConfig.looseLootMultiplier.factory4_day = 1
      LocationConfig.looseLootMultiplier.factory4_night = 1.2
      LocationConfig.looseLootMultiplier.interchange = 1.7
      LocationConfig.looseLootMultiplier.laboratory = 1.4
      LocationConfig.looseLootMultiplier.rezervbase = 1.2
      LocationConfig.looseLootMultiplier.shoreline = 1.2
      LocationConfig.looseLootMultiplier.woods = 0.8
      LocationConfig.looseLootMultiplier.lighthouse = 1.2
      
      LocationConfig.staticLootMultiplier.bigmap = 1.1
      LocationConfig.staticLootMultiplier.factory4_day = 1.2
      LocationConfig.staticLootMultiplier.factory4_night = 1.3
      LocationConfig.staticLootMultiplier.interchange = 1.2
      LocationConfig.staticLootMultiplier.laboratory = 1.1
      LocationConfig.staticLootMultiplier.rezervbase = 1.1
      LocationConfig.staticLootMultiplier.shoreline = 1.2
      LocationConfig.staticLootMultiplier.woods = 0.8
      LocationConfig.staticLootMultiplier.lighthouse = 1.2
  }
}
}
module.exports.Mod = lootprogression;
