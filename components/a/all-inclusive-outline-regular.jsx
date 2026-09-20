import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bv1y61bvs {
  d: path("M4 16a8 8 0 0 1 16 0");
}

.ils7yp4cg {
  d: path("M2 16h20");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v2r_pnsln {
  d: path("m8 9 3 3 5 -5");
}
</style><g class="nrj6p8qat"><path class="bv1y61bvs"/><path class="ils7yp4cg"/><path class="v2r_pnsln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:all-inclusive-outline-regular"} {...others} />);
}

export default Component;
