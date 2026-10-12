import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ouhxtme-y {
  d: path("m12 12.75l-1.5 1.875v.875a1.5 1.5 0 0 0 3 0v-.875z");
}

.sp6npkm6x {
  d: path("M10.25 2.75h3.5v4.5l2.75 3v11h-9v-11l2.75-3Zm0 2.5h3.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="sp6npkm6x"/><path class="ouhxtme-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sauce-bottle-sharp"} {...others} />);
}

export default Component;
