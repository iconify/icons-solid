import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nt9fogb3y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 5.5c-4.5 0-7 3-7 6.5s2.5 6.5 7 6.5Zm3.5 2q4.5 0 7.5 2M13.5 12q4.5 0 7.5 2m-7.5 2.5q4.5 0 7.5 2");
}
</style><path class="nt9fogb3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:adaptive-headlights"} {...others} />);
}

export default Component;
