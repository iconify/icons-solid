import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dqc_a21-u {
  fill: currentColor;
  d: path("M22 3.41L16.71 8.7L20 12h-8V4l3.29 3.29L20.59 2zM3.41 22l5.29-5.29L12 20v-8H4l3.29 3.29L2 20.59z");
}
</style><path class="dqc_a21-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-close-fullscreen"} {...others} />);
}

export default Component;
