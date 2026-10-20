import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dnrda_bzr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8 7L22 7C22.5523 7 23 7.4477 23 8L23 22C23 22.5523 22.5523 23 22 23L8 23C7.4477 23 7 22.5523 7 22L7 8C7 7.4477 7.4477 7 8 7ZM11 14L11 16L19 16L19 14L11 14Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wuu1xwb6p {
  d: path("M16 5L16.0001 2L2 2L2 16.0001L5 16");
}
</style><g class="gp_8x1bzb"><path class="wuu1xwb6p"/><path clip-rule="evenodd" class="dnrda_bzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:copy-minus-sharp-fill"} {...others} />);
}

export default Component;
