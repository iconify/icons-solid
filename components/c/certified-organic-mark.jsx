import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e8-wbp93g {
  d: path("m21.5 12l-1.75 2l.5 2.75l-2.5 1l-1 2.5l-2.75-.5l-2 1.75l-2-1.75l-2.75.5l-1-2.5l-2.5-1l.5-2.75l-1.75-2l1.75-2l-.5-2.75l2.5-1l1-2.5l2.75.5l2-1.75l2 1.75l2.75-.5l1 2.5l2.5 1l-.5 2.75Z");
}

.h5zck7o9s {
  d: path("M8.5 15.5c0-4.5 2.25-7 7-7c0 4.5-2.5 7-7 7Zm0 0l4-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e8-wbp93g"/><path class="h5zck7o9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:certified-organic-mark"} {...others} />);
}

export default Component;
