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

.p9w4xwa0a {
  d: path("M15 6h3V3");
}

.wi6nhb2cd {
  d: path("M9 8.5c2.5 2 2.5 5 0 7");
}

.wqdx-yb5k {
  d: path("M4.75 16.25A8.5 8.5 0 0 1 18 6");
}

.x2ho6y6-n {
  d: path("M7.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}
</style><g class="hntgybcog"><path class="x2ho6y6-n"/><path class="wi6nhb2cd"/><path class="wqdx-yb5k"/><path class="p9w4xwa0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cricket-spin"} {...others} />);
}

export default Component;
