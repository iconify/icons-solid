import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft8b-kbbm {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 5L7 2L17 2L17 5M12 2L12 10M9 10L15 10M7 17L7 14L17 14L17 17M12 14L12 22M9 22L15 22");
}
</style><path class="ft8b-kbbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:type-vertical-sharp"} {...others} />);
}

export default Component;
