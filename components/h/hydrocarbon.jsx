import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xy-wcq4hv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.25 15a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m5-6a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m5 6a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m5-6a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M6 13.25l2-2.5m3 0l2 2.5m3 0l2-2.5");
}
</style><path class="xy-wcq4hv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hydrocarbon"} {...others} />);
}

export default Component;
