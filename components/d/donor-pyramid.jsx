import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vyv1gib2i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 3.25h4.5v4h-4.5ZM6 10h4.5v4H6Zm7.5 0H18v4h-4.5Zm-11 6.75H7v4H2.5Zm7.25 0h4.5v4h-4.5Zm7.25 0h4.5v4H17Z");
}
</style><path class="vyv1gib2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:donor-pyramid"} {...others} />);
}

export default Component;
