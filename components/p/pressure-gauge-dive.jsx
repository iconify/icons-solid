import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.et9l4bb9u {
  d: path("M11 17.5V19c0 1.75 2 2.5 5 2.5h5M7.818 13.182a4.5 4.5 0 0 1 0-6.364");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ses8_mp_x {
  d: path("M3.5 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0m7.5 0l3.5-3.5");
}
</style><g class="hntgybcog"><path class="ses8_mp_x"/><path class="et9l4bb9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pressure-gauge-dive"} {...others} />);
}

export default Component;
