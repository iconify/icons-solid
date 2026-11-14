import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kt13tjjhg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m0 15a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m14-7.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M5 7v10M7.25 5.75l9.5 5m-9.5 7.5l9.5-5");
}
</style><path class="kt13tjjhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:neural-network"} {...others} />);
}

export default Component;
