import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bycaedciq {
  d: path("M2.5 21H13m-9 0V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v16m0-16h4.5a2 2 0 0 1 2 2v2.5m0 0zA1.5 1.5 0 0 1 21 11a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 18 11a1.5 1.5 0 0 1 1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l5fy1gtmn {
  d: path("M8.25 6h.5a1.5 1.5 0 0 1 1.5 1.5V8a1.5 1.5 0 0 1-1.5 1.5h-.5A1.5 1.5 0 0 1 6.75 8v-.5A1.5 1.5 0 0 1 8.25 6M16 21.25c0-4 1.75-5.75 5.5-5.75c0 4-1.75 5.75-5.5 5.75m0 0l2.75-2.75");
}
</style><g class="hntgybcog"><path class="bycaedciq"/><path class="l5fy1gtmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:biofuel-pump"} {...others} />);
}

export default Component;
