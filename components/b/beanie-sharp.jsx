import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lni28qemf {
  d: path("M5 16v-2.75a7 5 0 0 1 14 0V16Zm-1 0h16v5H4zm6.5 1.25v2.5m3-2.5v2.5");
}

.u0vqaccvq {
  cx: 12px;
  cy: 6.5px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="u0vqaccvq"/><path class="lni28qemf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:beanie-sharp"} {...others} />);
}

export default Component;
