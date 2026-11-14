import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d4qx5iikp {
  d: path("M10 11.25a2 1.75 0 1 0 4 0a2 1.75 0 1 0-4 0M12 13v8m0-2.5q-4.5-1-5.5-6m5.5 6q4.5-1 5.5-6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q0o3pqj4d {
  d: path("M10 4.25a2 1.75 0 1 0 4 0a2 1.75 0 1 0-4 0");
}

.yukoym9ee {
  d: path("M10 7.75a2 1.75 0 1 0 4 0a2 1.75 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="q0o3pqj4d"/><path class="yukoym9ee"/><path class="d4qx5iikp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lavender"} {...others} />);
}

export default Component;
