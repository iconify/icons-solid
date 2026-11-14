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

.hou2uebcv {
  d: path("m12.5 18.75l3 2.25l1-3.75");
}

.nus3ylbxb {
  d: path("M2.5 12h19M4 3l8 9l3.5 9");
}
</style><g class="hntgybcog"><path class="nus3ylbxb"/><path class="hou2uebcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:wave-refraction"} {...others} />);
}

export default Component;
