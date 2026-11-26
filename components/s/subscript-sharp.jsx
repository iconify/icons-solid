import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w4p8wo2tm {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1.7704 3.6375L12 16L12.2999 16.3625M12.2998 3.6402L12 4L2 16L1.7681 16.2783M16.4323 15.3965L16.75 15.1L19 13L19 20M15 20L23 20");
}
</style><path class="w4p8wo2tm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:subscript-sharp"} {...others} />);
}

export default Component;
