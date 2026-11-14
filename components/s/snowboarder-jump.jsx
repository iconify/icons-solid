import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z5xlqg6gj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5V19Q7 18 11 14.5v6ZM13.668 9.617l5.638-2.053a1.5 1.5 0 0 1 1.923.897a1.5 1.5 0 0 1-.897 1.922l-5.638 2.053a1.5 1.5 0 0 1-1.923-.897a1.5 1.5 0 0 1 .897-1.922M4 13q3.5-7.5 9.5-7.5");
}
</style><path class="z5xlqg6gj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:snowboarder-jump"} {...others} />);
}

export default Component;
