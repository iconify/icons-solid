import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bvsjk7b5x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 14.5C3.5 7 9 3 17.5 3c0 7.5-5 11.5-14 11.5ZM17 14s3 2.75 3 4.75a3 3 0 0 1-6 0c0-2 3-4.75 3-4.75ZM7 11l6-4.5");
}
</style><path class="bvsjk7b5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chlorophyll"} {...others} />);
}

export default Component;
