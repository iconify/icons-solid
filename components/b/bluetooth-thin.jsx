import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.y15_2ccjd {
  fill: currentColor;
  d: path("M194.4 172.8L134.67 128l59.73-44.8a4 4 0 0 0 0-6.4l-64-48A4 4 0 0 0 124 32v88L66.4 76.8a4 4 0 0 0-4.8 6.4l59.73 44.8l-59.73 44.8a4 4 0 0 0 4.8 6.4L124 136v88a4 4 0 0 0 6.4 3.2l64-48a4 4 0 0 0 0-6.4M132 40l53.33 40L132 120Zm0 176v-80l53.33 40Z");
}
</style><path class="y15_2ccjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:bluetooth-thin"} {...others} />);
}

export default Component;
