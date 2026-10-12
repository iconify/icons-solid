import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hk09bvr2w {
  d: path("M3.75 21.25V11H7V2.75h10V11h3.25v10.25ZM12 5.5V10M9.75 7.75h4.5");
}

.pbu2b0thw {
  d: path("M10.25 21.25V17h3.5v4.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hk09bvr2w"/><path class="pbu2b0thw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hospital-clock-sharp"} {...others} />);
}

export default Component;
