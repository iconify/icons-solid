import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j_l-vbyrx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 5h10m2 2v10m-2 2H7m-2-2V7m4.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm14 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm14 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="j_l-vbyrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:unit-cell"} {...others} />);
}

export default Component;
