import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r8b6vac3o {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 3L21 8L3 8L3 3ZM3 16L10 16L10 21L3 21L3 16ZM14 16L21 16L21 21L14 21L14 16ZM12 8L12 12M6.5 16L6.5 12L17.5 12L17.5 16");
}
</style><path class="r8b6vac3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-diagram-sharp"} {...others} />);
}

export default Component;
