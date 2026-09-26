import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uht88ogek {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.6569 5L21 5L21 16.3431M21 21L3 21L3 5L5 5M6 11L11 11M16 2L16 8M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="uht88ogek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:calendar-off-sharp"} {...others} />);
}

export default Component;
