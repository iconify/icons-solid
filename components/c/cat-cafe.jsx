import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sd91ykttd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 12V3.5l3 2.5h2l3-2.5v6c3 1.5 5 5.5 5 11.5h-13Zm13 9c3.5 0 4-3 3-5.5M8.5 9h.01");
}
</style><path class="sd91ykttd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cat-cafe"} {...others} />);
}

export default Component;
