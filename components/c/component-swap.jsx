import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a9icn-3ju {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.561 3.561l3.878 3.878a1.5 1.5 0 0 1 0 2.122l-3.878 3.878a1.5 1.5 0 0 1-2.122 0L3.561 9.561a1.5 1.5 0 0 1 0-2.122l3.878-3.878a1.5 1.5 0 0 1 2.122 0M15 16.25h6m-1.75-1.75L21 16.25m0 3.5h-6m1.75 1.75L15 19.75");
}
</style><path class="a9icn-3ju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:component-swap"} {...others} />);
}

export default Component;
