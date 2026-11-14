import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kzhqhkyjx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.856 4.356l2.788 2.788a2.625 2.625 0 0 1 0 3.712l-2.788 2.788a2.625 2.625 0 0 1-3.712 0l-2.788-2.788a2.625 2.625 0 0 1 0-3.712l2.788-2.788a2.625 2.625 0 0 1 3.712 0M11.75 12.25L3.5 20.5m8.25-14.75l6.5 6.5m0-6.5l-6.5 6.5");
}
</style><path class="kzhqhkyjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fly-swatter"} {...others} />);
}

export default Component;
