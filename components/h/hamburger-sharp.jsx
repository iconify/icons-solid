import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.budiujh_s {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 12L4 11C4 6.5817 7.5817 3 12 3C16.4183 3 20 6.5817 20 11L20 12M2 12L22 12L22 16L2 16ZM4 16L4 21L20 21L20 16");
}
</style><path class="budiujh_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hamburger-sharp"} {...others} />);
}

export default Component;
