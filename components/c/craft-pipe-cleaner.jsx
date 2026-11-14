import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gut2jwb1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12c3-6 6-6 9.5 0s6.5 6 9.5 0M4.75 8.75l-1.5-1.5m4 .25v-3m2.5 4.25l1.5-1.5m3 8l-1.5 1.5m4-.25v3m2.5-4.25l1.5 1.5");
}
</style><path class="gut2jwb1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:craft-pipe-cleaner"} {...others} />);
}

export default Component;
