import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ydmdk9c9w {
  fill: currentColor;
  d: path("M4 15.712V4h16v2.935l-6.48 7.27l-4.02-4.018zM4 20v-2.712l5.5-5.525l3.98 3.981L20 8.434V20z");
}
</style><path class="ydmdk9c9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:sound-detection-glass-break"} {...others} />);
}

export default Component;
