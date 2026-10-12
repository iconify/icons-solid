import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hig6_8bst {
  d: path("M9.5 8.5L11 10l3-3");
}

.whbeweb8v {
  d: path("M6 21.25V3M3.25 21.25h5.5M6 4h14.25l-1.2 1.6L17 8.5l2.05 2.9l1.2 1.6H6Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="whbeweb8v"/><path class="hig6_8bst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:checkpoint-sharp"} {...others} />);
}

export default Component;
