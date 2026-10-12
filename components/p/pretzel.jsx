import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j9uk5ackw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 18.25l5-5c2.5-2.5 2-9.25 4.75-9.5s4.5 2.25 4.5 5.75c0 6-4.25 11.25-9.25 11.25S2.75 15.5 2.75 9.5c0-3.5 1.75-6 4.5-5.75s2.25 7 4.75 9.5l5 5");
}
</style><path class="j9uk5ackw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pretzel"} {...others} />);
}

export default Component;
