import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ucffu_3hb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3h11v3.5h-11Zm-3 8H10v3.5H3.5ZM14 11h6.5v3.5H14ZM3.5 17.5H10V21H3.5Zm10.5 0h6.5V21H14Z");
}
</style><path class="ucffu_3hb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:classroom-layout"} {...others} />);
}

export default Component;
