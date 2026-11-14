import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abuev3b1j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21V9h3v2.5h3V9h3v2.5h3V9h3l3.5 3.5V21ZM4.5 9V2.5m1.423.474l.827.276a.791.791 0 0 1 0 1.5l-.827.276A1.08 1.08 0 0 1 4.5 4a1.08 1.08 0 0 1 1.423-1.026");
}
</style><path class="abuev3b1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fort-bastion"} {...others} />);
}

export default Component;
