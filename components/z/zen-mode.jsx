import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yayhvm1vr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 4.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-5 10l3.75-3.5C9 10.5 10.25 10 12 10s3 .5 3.75 1.25l3.75 3.5m-17 4.75q0-2 2.5-2l7 2l7-2q2.5 0 2.5 2q0 1.5-2 1.5h-15q-2 0-2-1.5");
}
</style><path class="yayhvm1vr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:zen-mode"} {...others} />);
}

export default Component;
