import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eaueidcrq {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 12L2 12M5.2929 15.2929L2 12L5.2929 8.7071M14 12L22 12M18.7071 8.7071L22 12L18.7071 15.2929M12 10L12 2M8.7071 5.2929L12 2L15.2929 5.2929M12 14L12 22M15.2929 18.7071L12 22L8.7071 18.7071");
}
</style><path class="eaueidcrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:move-sharp"} {...others} />);
}

export default Component;
