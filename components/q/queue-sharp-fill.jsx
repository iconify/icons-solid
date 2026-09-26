import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qmk28zb7j {
  d: path("M1 16L23 16M1 20L18 20");
}

.xavs7fj5t {
  fill: currentColor;
  d: path("M2 3L22 3C22.5523 3 23 3.4477 23 4L23 12C23 12.5523 22.5523 13 22 13L2 13C1.4477 13 1 12.5523 1 12L1 4C1 3.4477 1.4477 3 2 3Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="xavs7fj5t"/><path class="qmk28zb7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:queue-sharp-fill"} {...others} />);
}

export default Component;
