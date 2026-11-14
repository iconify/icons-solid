import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h5hr7ccxd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h3V7q2.5 2 2.5 5v8q0 1.5-1.5 1.5H6q-1.5 0-1.5-1.5v-8q0-3 2.5-5Zm9.628 13.192l2.265-1.056a1.75 1.75 0 0 1 2.326.846a1.75 1.75 0 0 1-.847 2.326l-2.265 1.056a1.75 1.75 0 0 1-2.326-.846a1.75 1.75 0 0 1 .847-2.326M4.5 14.5h8");
}
</style><path class="h5hr7ccxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:wine-bottle-open"} {...others} />);
}

export default Component;
