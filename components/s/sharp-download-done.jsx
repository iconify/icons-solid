import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sg7gi1b0a {
  fill: currentColor;
  d: path("M5 18h14v2H5zm4.6-2.7L5 10.7l2-1.9l2.6 2.6L17 4l2 2z");
}
</style><path class="sg7gi1b0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-download-done"} {...others} />);
}

export default Component;
