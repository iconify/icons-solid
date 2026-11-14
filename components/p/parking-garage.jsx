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

.wuaxil3fv {
  d: path("M7.5 21.5V17a4.5 4.5 0 0 1 9 0v4.5M10.25 10V5.5h2.5a1.5 1.5 0 0 1 0 3h-2.5");
}

.xyn8xmbpr {
  d: path("M3 21.5v-17a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v17");
}
</style><g class="hntgybcog"><path class="xyn8xmbpr"/><path class="wuaxil3fv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:parking-garage"} {...others} />);
}

export default Component;
