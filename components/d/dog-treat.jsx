import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ih_ct4d3y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 10h9a2.25 2.25 0 1 1 3 2a2.25 2.25 0 1 1-3 2h-9a2.25 2.25 0 1 1-3-2a2.25 2.25 0 1 1 3-2Zm3 2h.01m2.99 0h.01");
}
</style><path class="ih_ct4d3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dog-treat"} {...others} />);
}

export default Component;
