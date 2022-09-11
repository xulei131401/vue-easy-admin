import { defineStore } from 'pinia'
import { LocaleConfig, defaultLocaleConfig } from '@/configs'
import type { LocaleType } from '@/utils/locale'

export const useLocaleStore = defineStore({
	id: 'app-locale',
	state: () => ({
		localInfo: defaultLocaleConfig as LocaleConfig
	}),
	getters: {
		getLocale(): LocaleType {
			return this.localInfo?.locale ?? 'zh_CN'
		}
	},
	actions: {}
})
