import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zn3spfbex {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.75h5V4l2 .5l5 5.5l-3 3l-2.5-2.5V21H8V10.5L5.5 13l-3-3l5-5.5l2-.5Zm2.5 0V21m4.75-13.75L20 11.5M7.25 7.25L4 11.5");
}
</style><path class="zn3spfbex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:track-suit"} {...others} />);
}

export default Component;
