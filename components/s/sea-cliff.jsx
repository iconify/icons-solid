import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zus9ejk_t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h6l2 5l-1 4l2 5.5h-9Zm12 14.5q1.75-1.5 3.5 0t3.5 0M15 14.5q1.75-1.5 3.5 0t3 .25");
}
</style><path class="zus9ejk_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sea-cliff"} {...others} />);
}

export default Component;
