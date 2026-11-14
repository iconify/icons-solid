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

.il6glvw9t {
  d: path("M3 20.5V12a9 9 0 0 1 18 0v8.5");
}

.qk_ynqbms {
  d: path("m6.5 20l3.5-6.5l4 4l3-7m-7 3h.01m3.99 4h.01m2.99-7h.01");
}
</style><g class="hntgybcog"><path class="il6glvw9t"/><path class="qk_ynqbms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cave-survey"} {...others} />);
}

export default Component;
