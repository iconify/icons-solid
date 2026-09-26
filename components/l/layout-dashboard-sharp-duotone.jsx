import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zy5wuebdp {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L10 3L10 12L3 12L3 3ZM3 16L10 16L10 21L3 21L3 16ZM14 3L21 3L21 8L14 8L14 3ZM14 12L21 12L21 21L14 21L14 12Z");
}
</style><path class="zy5wuebdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:layout-dashboard-sharp-duotone"} {...others} />);
}

export default Component;
