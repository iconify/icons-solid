import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.if2r8_b7f {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 2L14 2L14 22L2 22ZM14 22L23 22M14 17L20 17L20 10M18 6L22 6L22 10L18 10ZM22 6L22 3M18 6L18 3M9.3 7.6L6 12L10 12L6.7 16.4");
}
</style><path class="if2r8_b7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:ev-charger-sharp"} {...others} />);
}

export default Component;
