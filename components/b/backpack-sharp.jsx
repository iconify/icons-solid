import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r1-rlqcgd {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 15H20M9 10H15M8 15V19M15 6V5C15 3.343 13.657 2 12 2C10.343 2 9 3.343 9 5V6M4 22H20V6H4V22Z");
}
</style><path class="r1-rlqcgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:backpack-sharp"} {...others} />);
}

export default Component;
