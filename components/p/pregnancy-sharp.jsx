import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.og-we4bum {
  d: path("M8.75 8.75C7.5 10.75 7 13.5 7.5 16.5l.5 4.75m3.5-12.5l.438 2.188l.562.562m0 0C16 12 18 14 18 16.25S15.25 20 11.75 20v1.25");
}

.pmpn_x9is {
  cx: 10px;
  cy: 5.5px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="pmpn_x9is"/><path class="og-we4bum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pregnancy-sharp"} {...others} />);
}

export default Component;
