interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Owner', 'HR Manager', 'Employee', 'Administrator'],
  tenantName: 'Team',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user information',
    'Manage team information',
    'Alter user information',
    'Alter team information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/e2022fe8-189f-4cc9-a9c0-3f13494463db',
};
