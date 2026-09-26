import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lgytc7ilk {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 10L18 21M14.7071 17.7071L18 21L21.2929 17.7071M14 6L3 6M6.2929 2.7071L3 6L6.2929 9.2929M9 21L5 21M3 19L3 15M5 13L9 13M11 19L11 15");
}
</style><path class="lgytc7ilk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:expand-dashed-down-left-box-sharp"} {...others} />);
}

export default Component;
