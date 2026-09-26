import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ludyrgajg {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L10 3L10 8L3 8L3 3ZM14 3L21 3L21 8L14 8L14 3ZM8.5 16L15.5 16L15.5 21L8.5 21L8.5 16ZM10 5.5L14 5.5M6.5 8L6.5 12L12 12L12 16");
}
</style><path class="ludyrgajg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:diagram-project-sharp"} {...others} />);
}

export default Component;
