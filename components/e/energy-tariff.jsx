import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dynwgvbiz {
  d: path("m13.5 7l-3 4.5h4l-3 4.5");
}

.e8_gx2b8k {
  d: path("M3 5a2 2 0 0 1 2-2h6.5l9.5 9.5l-8.5 8.5L3 11.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="e8_gx2b8k"/><path class="dynwgvbiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:energy-tariff"} {...others} />);
}

export default Component;
