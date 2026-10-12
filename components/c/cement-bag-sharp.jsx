import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.na8us16sm {
  d: path("M8 11h8v6H8z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xtlbptbid {
  d: path("M5.5 5.75h13l1.25 14l.313 1.532l-1.563-.032h-13l-1.563.032l.313-1.532Zm0 0l1-3h11l1 3");
}
</style><g class="x2cwu0gfd"><path class="xtlbptbid"/><path class="na8us16sm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cement-bag-sharp"} {...others} />);
}

export default Component;
