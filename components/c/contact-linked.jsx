import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eioib5fst {
  d: path("M10.5 16H18v4.5h-7.5Z");
}

.jigbqsb_d {
  d: path("M4.25 4.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM2.5 13a3.75 3.5 0 0 1 7.5 0m5.75-8.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM14 13a3.75 3.5 0 0 1 7.5 0m-16 3H13v4.5H5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jigbqsb_d"/><path class="eioib5fst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:contact-linked"} {...others} />);
}

export default Component;
