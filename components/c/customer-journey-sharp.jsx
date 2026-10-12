import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kso3pfbig {
  cx: 5px;
  cy: 13px;
  r: 2px;
}

.ur30cti5h {
  d: path("M3.25 21.25h4V18h-4.5v3.25zm7-2h6a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h1.5m3.5 2v-3m0-3.5H21L20 4.5l1 1.75h-3.75Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="kso3pfbig"/><path class="ur30cti5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:customer-journey-sharp"} {...others} />);
}

export default Component;
