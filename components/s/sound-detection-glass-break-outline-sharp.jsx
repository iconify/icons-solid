import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ue5tjrbhd {
  fill: currentColor;
  d: path("M3 21V3h18v18zM5 5v9l4.5-4.525l4 4L19 7.3V5zm0 14h14v-8.7l-5.5 6.175l-4-4L5 17z");
}
</style><path class="ue5tjrbhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sound-detection-glass-break-outline-sharp"} {...others} />);
}

export default Component;
