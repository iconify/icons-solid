import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d-g8efjqu {
  d: path("M3.25 14.5C3.25 9 7 5.75 12 5.75S20.75 9 20.75 14.5v5H3.25V18Z");
}

.f3c4-773j {
  d: path("M5 13c3 1 6 3.5 7 6.5m7-6.5c-3 1-6 3.5-7 6.5m0-9.75c-1.25-1.75-1.25-4.75.75-7c1 2.5.75 5-.75 7Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zur2nlbbt {
  cx: 12px;
  cy: 11.5px;
  r: 1.25px;
}
</style><g class="x2cwu0gfd"><path class="d-g8efjqu"/><path class="f3c4-773j"/><circle class="zur2nlbbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:turban-pagri-sharp"} {...others} />);
}

export default Component;
