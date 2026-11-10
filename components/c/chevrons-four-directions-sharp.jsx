import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iduyabbvm {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.589 15.81L2 12L5.589 8.19M8.185 18.41L12 22L15.815 18.41M15.815 5.59L12 2L8.185 5.59M18.411 15.81L22 12L18.411 8.19");
}
</style><path class="iduyabbvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chevrons-four-directions-sharp"} {...others} />);
}

export default Component;
