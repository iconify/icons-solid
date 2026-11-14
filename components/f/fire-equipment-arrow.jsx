import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sq_ubpb0z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 7za3.5 3.5 0 0 1 3.5 3.5v7A3.5 3.5 0 0 1 7.5 21A3.5 3.5 0 0 1 4 17.5v-7A3.5 3.5 0 0 1 7.5 7M6 7V4h3v3m0-3h4l3 4.5m-1 10h6.5m-3-3l3 3l-3 3");
}
</style><path class="sq_ubpb0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fire-equipment-arrow"} {...others} />);
}

export default Component;
