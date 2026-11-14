import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zvh59ofnq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 5.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M5.75 12h12.5A1.75 1.75 0 0 1 20 13.75v1a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 14.75v-1A1.75 1.75 0 0 1 5.75 12m4.75-4.25V12m3-4.25V12M4 20h16");
}
</style><path class="zvh59ofnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pin-customs"} {...others} />);
}

export default Component;
