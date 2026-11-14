import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q782w9b1k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4.5h14m-7 0v15m-4 0h8M5 4.5V11m-2.5 0h5a2.5 2.5 0 0 1-5 0M19 4.5V11m-2.5 0h5a2.5 2.5 0 0 1-5 0");
}
</style><path class="q782w9b1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:equation-balance"} {...others} />);
}

export default Component;
