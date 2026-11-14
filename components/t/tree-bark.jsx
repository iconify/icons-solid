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

.hp05culjv {
  d: path("M6 2.5h12Q16.5 7 18 12t0 9.5H6Q7.5 17 6 12t0-9.5");
}

.jqyi9yb7v {
  d: path("M10 5q-1 4 .25 7.5t.25 6.5m4-14q1 3.5-.5 6m.5 3.5q-1 2.5 0 4.5");
}
</style><g class="hntgybcog"><path class="hp05culjv"/><path class="jqyi9yb7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tree-bark"} {...others} />);
}

export default Component;
