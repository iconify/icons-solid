import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m0_bjhp0l {
  d: path("M12.75 12.25L15 14.5l-2.25 2.25");
}

.ts-mfgbmv {
  d: path("m11.484 9.993l3.5-3.667a1.75 1.75 0 0 1 2.532 0l3.5 3.667a1.75 1.75 0 0 1 .484 1.208v6.549a1.75 1.75 0 0 1-1.75 1.75h-7A1.75 1.75 0 0 1 11 17.75v-6.549a1.75 1.75 0 0 1 .484-1.208M4.25 9.5h1A1.75 1.75 0 0 1 7 11.25v6.5a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-6.5A1.75 1.75 0 0 1 4.25 9.5m-.5 0V8h2v1.5m2.75 5H15");
}
</style><g class="hntgybcog"><path class="ts-mfgbmv"/><path class="m0_bjhp0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:battery-to-home"} {...others} />);
}

export default Component;
