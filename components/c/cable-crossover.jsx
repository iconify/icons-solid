import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ztf4odeej {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m14 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M5 8.5L17.5 20M19 8.5L6.5 20m8.5 0h5M4 20h5");
}
</style><path class="ztf4odeej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cable-crossover"} {...others} />);
}

export default Component;
