import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jwmiu5agc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 9l9-5.5L21 9M8.5 10.5h7A3.5 3.5 0 0 1 19 14v4a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 18v-4a3.5 3.5 0 0 1 3.5-3.5M10 14v3.5m4-3.5v3.5");
}
</style><path class="jwmiu5agc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:outdoor-plug"} {...others} />);
}

export default Component;
