import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vo2xvel7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.75h4V6c0 2 3.5 4.5 3.5 9c0 3.5-2 6-5.5 6s-5.5-2.5-5.5-6c0-4.5 3.5-7 3.5-9ZM6.75 14.5h10.5");
}
</style><path class="vo2xvel7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:vase-tall"} {...others} />);
}

export default Component;
