import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gtmwntbok {
  d: path("m10.75 6.75l3.5 1.75l-3.5 1.75ZM4 17.5q8-2.5 16 0m-17 3q9-2.5 18 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z-l-m0bjt {
  d: path("M3 4h18v9H3z");
}
</style><g class="x2cwu0gfd"><path class="z-l-m0bjt"/><path class="gtmwntbok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cinema-sharp"} {...others} />);
}

export default Component;
