import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qd2tl5bnn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3.5c-2.75 2.25-4 5.25-4 8.5s1.25 6.25 4 8.5m7-17c2.75 2.25 4 5.25 4 8.5s-1.25 6.25-4 8.5");
}
</style><path class="qd2tl5bnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:parentheses"} {...others} />);
}

export default Component;
