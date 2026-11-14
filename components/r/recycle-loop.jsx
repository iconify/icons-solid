import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sa4rvgzoi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 10.5L12 4.75l3.5 6m.75-2.5l-.75 2.5L13 10m4 3.5l3.25 5.5H13.5m1.75-1.75L13.5 19l1.75 1.75M10.5 19H3.75l3.5-6m-2.5.75l2.5-.75l.75 2.5");
}
</style><path class="sa4rvgzoi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:recycle-loop"} {...others} />);
}

export default Component;
