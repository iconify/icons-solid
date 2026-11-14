import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e2sqpjbqe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5h3.5V9H3Zm14.5 0H21V9h-3.5Zm-11 2.25h11M3 12h3.5v4.5H3Zm14.5 0H21v4.5h-3.5Zm-11 2.25h11M2.5 20h19");
}
</style><path class="e2sqpjbqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dumbbell-pair"} {...others} />);
}

export default Component;
