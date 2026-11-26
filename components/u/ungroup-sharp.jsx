import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.be-vdtepw {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3L21 3L21 12L12 12L12 3ZM9 12L3 12L3 21L12 21L12 15M8 2L8 5.5M2 8L5.5 8M16 18.5L16 22M18.5 16L22 16");
}
</style><path class="be-vdtepw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:ungroup-sharp"} {...others} />);
}

export default Component;
