import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hzhkalbck {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.875 2.5h1.25A1.375 1.375 0 0 1 10.5 3.875A1.375 1.375 0 0 1 9.125 5.25h-1.25A1.375 1.375 0 0 1 6.5 3.875A1.375 1.375 0 0 1 7.875 2.5M6.5 8H10l1.25 3.5h6.25A1.5 1.5 0 0 1 19 13v.5a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 0 1-1.5-1.5ZM5 19.5h14M6.75 17.75L5 19.5l1.75 1.75m10.5-3.5L19 19.5l-1.75 1.75");
}
</style><path class="hzhkalbck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:car-seat-adjust"} {...others} />);
}

export default Component;
