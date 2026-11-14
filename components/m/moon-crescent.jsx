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

.nasrfzbjy {
  d: path("M9.25 3.5A9.5 9.5 0 0 0 20.5 14.75");
}

.zpc0mrzbr {
  d: path("M20.5 14.75A9.25 9.25 0 1 1 9.25 3.5");
}
</style><g class="hntgybcog"><path class="zpc0mrzbr"/><path class="nasrfzbjy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:moon-crescent"} {...others} />);
}

export default Component;
