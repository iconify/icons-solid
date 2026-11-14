import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bkhrxdbjt {
  d: path("m3 6.5l1.25-3h15.5l1.25 3Zm1.5 0v14h15v-14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ug8_dpb3t {
  d: path("M9.25 16.25a2.75 2 0 1 0 5.5 0a2.75 2 0 1 0-5.5 0m-2.5-3.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m4-1.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m4 1.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><g class="hntgybcog"><path class="bkhrxdbjt"/><path class="ug8_dpb3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pin-pet-shop"} {...others} />);
}

export default Component;
