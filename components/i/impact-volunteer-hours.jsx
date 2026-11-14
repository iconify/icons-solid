import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b_qq7dbsh {
  d: path("M11.5 3v3L5 18v3m13 0v-6m-2.5 2.5L18 15l2.5 2.5");
}

.gal-xobkx {
  d: path("M3 3h10.5M3 21h10.5M5 3v3l6.5 12v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gal-xobkx"/><path class="b_qq7dbsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:impact-volunteer-hours"} {...others} />);
}

export default Component;
