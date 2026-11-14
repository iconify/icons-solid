import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l7u_fvbub {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M6 9.25v4.5M3.5 18.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M11 5h8m-7.5 13.5h6");
}
</style><path class="l7u_fvbub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:stepper-vertical"} {...others} />);
}

export default Component;
