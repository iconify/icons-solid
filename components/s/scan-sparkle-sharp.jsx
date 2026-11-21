import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cnr6orgbn {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 6.0006L14.1469 9.8531L17.9994 12L14.1469 14.1469L12 17.9994L9.8531 14.1469L6.0006 12L9.8531 9.8531ZM3 9L3 8L3 3L8 3L9 3M15 3L16 3L21 3L21 8L21 9M21 15L21 16L21 21L16 21L15 21M9 21L8 21L3 21L3 16L3 15");
}
</style><path class="cnr6orgbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:scan-sparkle-sharp"} {...others} />);
}

export default Component;
