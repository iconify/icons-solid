import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dp7avlb_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 4l1.25 4.25h4.5l-3.5 2.5l1.25 4l-3.5-2.5l-3.5 2.5l1.25-4l-3.5-2.5h4.5ZM4 18h16l-1.5 1.75L20 21.5H4l1.5-1.75Z");
}
</style><path class="dp7avlb_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:all-star"} {...others} />);
}

export default Component;
