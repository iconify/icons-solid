import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o6bnmgble {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 3.5h2.25A2.625 2.625 0 0 1 10.5 6.125v3.25A2.625 2.625 0 0 1 7.875 12h-2.25A2.625 2.625 0 0 1 3 9.375v-3.25A2.625 2.625 0 0 1 5.625 3.5m10.5 0h2.25A2.625 2.625 0 0 1 21 6.125v3.25A2.625 2.625 0 0 1 18.375 12h-2.25A2.625 2.625 0 0 1 13.5 9.375v-3.25A2.625 2.625 0 0 1 16.125 3.5M3.5 18.5h17M18 15.75l2.75 2.75L18 21.25");
}
</style><path class="o6bnmgble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:frame-stack-horizontal"} {...others} />);
}

export default Component;
