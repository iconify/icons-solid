import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.acz6r4b-m {
  d: path("M3.75 4.75h11m-11 4.5h16.5m-16.5 4.5h16.5m-12 5.5h12m-2.5-13l1.75-1.5V9");
}

.npkfpom0b {
  cx: 4.75px;
  cy: 19.25px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="acz6r4b-m"/><circle class="npkfpom0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:footnote-sharp"} {...others} />);
}

export default Component;
