import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nf5pmccce {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 20L20 22L12 18.4223L4 22L4 4M6.6569 2L20 2L20 15.3431M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="nf5pmccce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bookmark-off-sharp"} {...others} />);
}

export default Component;
