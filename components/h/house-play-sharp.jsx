import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mx_-vuqji {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22.352 11.15L19.998 9.15L11.998 3L3.998 9.15L1.645 11.15M3.998 9.15V21H19.998V9.15M9.498 9.28L15.874 13.5L9.498 17.72V9.28Z");
}
</style><path class="mx_-vuqji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:house-play-sharp"} {...others} />);
}

export default Component;
