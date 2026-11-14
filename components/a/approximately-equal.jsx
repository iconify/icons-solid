import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j1f-uv_2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9.5c2.5-2.25 4.5-2.25 7 0s4.5 2.25 7 0m-14 5c2.5-2.25 4.5-2.25 7 0s4.5 2.25 7 0");
}
</style><path class="j1f-uv_2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:approximately-equal"} {...others} />);
}

export default Component;
