import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ift8z5byc {
  d: path("M4.5 2.75h15v18.5h-15zm0 3.75h15");
}

.rccjqmmxf {
  d: path("M8.5 17.5c0-4.5 2.5-7.5 7-8c.25 4.75-2.25 7.75-7 8Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ift8z5byc"/><path class="rccjqmmxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:fertilizer-bag-sharp"} {...others} />);
}

export default Component;
