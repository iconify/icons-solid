import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.choxzo63j {
  d: path("M4 18L4 21L22 21L22 3L4 3L4 6M13 21L13 3M9 12L2 12M5.2929 8.7071L2 12L5.2929 15.2929");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ki4ijoh_l {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M13 21L22 21L22 3L13 3Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="ki4ijoh_l"/><path class="choxzo63j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:table-columns-move-before-sharp-two-tone"} {...others} />);
}

export default Component;
