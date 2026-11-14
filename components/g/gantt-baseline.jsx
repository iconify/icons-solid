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

.i9507fd3f {
  fill: currentColor;
  d: path("M13 13.5h5.5A2.5 2.5 0 0 1 21 16a2.5 2.5 0 0 1-2.5 2.5H13a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5");
}

.y5czubb4d {
  d: path("M3.5 3v18M9 5h5.5A2.5 2.5 0 0 1 17 7.5a2.5 2.5 0 0 1-2.5 2.5H9a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 9 5");
}
</style><g class="hntgybcog"><path class="y5czubb4d"/><path class="i9507fd3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gantt-baseline"} {...others} />);
}

export default Component;
