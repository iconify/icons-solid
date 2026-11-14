import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.htzabiylr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 12h10a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 13.5A1.5 1.5 0 0 1 6.5 12M16 2.5za2 2 0 0 1 2 2V10a2 2 0 0 1-2 2a2 2 0 0 1-2-2V4.5a2 2 0 0 1 2-2M11.5 15v4.5m-4.5 2a4.5 2 0 0 1 9 0Z");
}
</style><path class="htzabiylr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:salon-chair"} {...others} />);
}

export default Component;
