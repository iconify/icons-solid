import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l5j20cc4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 21h2.5l1.5-4.25L8 15c1.25-2.5 4.5-5.75 7-7l1.75 2L21 8.5V6c0-1.65-1.35-3-3-3c-8.25.5-14.5 6.75-15 15c0 1.65 1.35 3 3 3Zm12.25-6v6m-3-3h6");
}
</style><path class="l5j20cc4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:call-ambulance"} {...others} />);
}

export default Component;
