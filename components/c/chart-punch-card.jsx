import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s73ddxmsx {
  fill: currentColor;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m5.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m7.75 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M2.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m8.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m5.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M3.25 19a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m7 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M18 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><path class="s73ddxmsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chart-punch-card"} {...others} />);
}

export default Component;
