import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ldywzdbww {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 14.5c.5-5 3-8 6-8.5L13 3.75L14.5 6c2 .5 3.5 1.5 4.5 3.5q2.5.75 2 1.75q-1 .5-2.25.5C16 9 10.5 9 7.75 14.5l.75 2q-2-1-4 0zm-3 6q2.5-2 5 0t5 0t5 0t4 0");
}
</style><path class="ldywzdbww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dolphin-jumping"} {...others} />);
}

export default Component;
