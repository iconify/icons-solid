import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ta9c4kb7d {
  fill: currentColor;
  d: path("M2 14v-2h20v2zm8.5-4V7H5V4h14v3h-5.5v3zm0 10v-4h3v4z");
}
</style><path class="ta9c4kb7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-strikethrough"} {...others} />);
}

export default Component;
