import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dno4_nblm {
  fill: currentColor;
  d: path("M3 20C3 20.5523 2.5523 21 2 21C1.4477 21 1 20.5523 1 20C1 19.4477 1.4477 19 2 19C2.5523 19 3 19.4477 3 20Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.l824gd0ft {
  d: path("M2 9L2 4L22 4L22 20L13 20M1 16L2 16C4.2091 16 6 17.7909 6 20L6 21M1 12L2 12C6.4183 12 10 15.5817 10 20L10 21");
}
</style><g class="gp_8x1bzb"><path class="l824gd0ft"/><path class="dno4_nblm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cast-sharp-fill"} {...others} />);
}

export default Component;
