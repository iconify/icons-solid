import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z-xvd_bth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 13h13.75a2.625 2.625 0 0 1 2.625 2.625v1.75A2.625 2.625 0 0 1 18.875 20H5.125A2.625 2.625 0 0 1 2.5 17.375v-1.75A2.625 2.625 0 0 1 5.125 13M6 13v3.75M9 13v2m3-2v3.75M15 13v2m3-2v3.75M4.5 3v7m4-4.5l-4 2.75l4 1.75m3.5 0V6.5a1.75 1.75 0 0 1 3.5 0V10m0-3.5a1.75 1.75 0 0 1 3.5 0V10");
}
</style><path class="z-xvd_bth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:units-si"} {...others} />);
}

export default Component;
