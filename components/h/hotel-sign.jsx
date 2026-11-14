import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c1qz1bbjg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.5h10A3.5 3.5 0 0 1 20.5 7v5a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 12V7A3.5 3.5 0 0 1 7 3.5m1 12V21m8-5.5V21M9.5 6.75v5.5m5-5.5v5.5m-5-2.75h5");
}
</style><path class="c1qz1bbjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hotel-sign"} {...others} />);
}

export default Component;
