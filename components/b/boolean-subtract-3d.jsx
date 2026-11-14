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

.ppmlg_bej {
  d: path("m12 2.5l4 2.25A4.85 4.85 0 0 0 20.25 12v4.75L12 21.5l-8.25-4.75v-9.5Z");
}

.w42p7ebip {
  d: path("M3.75 7.25L12 12l4-2.25M12 12v9.5");
}
</style><g class="hntgybcog"><path class="ppmlg_bej"/><path class="w42p7ebip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:boolean-subtract-3d"} {...others} />);
}

export default Component;
