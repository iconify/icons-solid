import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f7rs9ds8d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h18c0 4.5-4 8-9 8s-9-3.5-9-8m7 0V5.5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2V7m0 2.5h.01");
}
</style><path class="f7rs9ds8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bathroom-sink"} {...others} />);
}

export default Component;
