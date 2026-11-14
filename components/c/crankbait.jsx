import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fuuxnqmxm {
  d: path("M7.5 11.5L3 16l2 1.5L9.5 13Zm4-1.5h.01");
}

.lklcojbia {
  d: path("M7 10.5c2-4 10-3.5 13.5 0C17 14 9 14.5 7 10.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lklcojbia"/><path class="fuuxnqmxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:crankbait"} {...others} />);
}

export default Component;
