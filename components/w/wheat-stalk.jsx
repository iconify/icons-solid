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

.m4m-8wb5x {
  d: path("M12 6.5v15m0-15c-1.25-1.5-1.25-2.5 0-4c1.25 1.5 1.25 2.5 0 4");
}

.xi994ow_y {
  d: path("M12 8.5c-2.5 0-4-1.5-4-4c2.5 0 4 1.5 4 4m0 6.5c-2.5 0-4-1.5-4-4c2.5 0 4 1.5 4 4m0-3.25c2.5 0 4-1.5 4-4c-2.5 0-4 1.5-4 4m0 6.5c2.5 0 4-1.5 4-4c-2.5 0-4 1.5-4 4");
}
</style><g class="hntgybcog"><path class="m4m-8wb5x"/><path class="xi994ow_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:wheat-stalk"} {...others} />);
}

export default Component;
