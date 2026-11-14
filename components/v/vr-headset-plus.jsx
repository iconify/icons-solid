import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jw9p1ilmu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5h11A2.5 2.5 0 0 1 20 5v4.5a2.5 2.5 0 0 1-2.5 2.5h-2.75a2.75 2.75 0 0 0-5.5 0H6.5A2.5 2.5 0 0 1 4 9.5V5a2.5 2.5 0 0 1 2.5-2.5ZM2 7.25h2m16 0h2M18 15v6m-3-3h6");
}
</style><path class="jw9p1ilmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:vr-headset-plus"} {...others} />);
}

export default Component;
