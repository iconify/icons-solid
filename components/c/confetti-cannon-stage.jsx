import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g4ga4lbpc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.39 17.352l1.648-4.327a1.75 1.75 0 0 1 2.873-.614l2.678 2.678a1.75 1.75 0 0 1-.614 2.873L6.648 19.61a1.75 1.75 0 0 1-2.258-2.258M9 3l1.5 3m4 1.5h.01m2.49-4l2.5 1m-1.5 6l3 1m-2.5 4h.01");
}
</style><path class="g4ga4lbpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:confetti-cannon-stage"} {...others} />);
}

export default Component;
