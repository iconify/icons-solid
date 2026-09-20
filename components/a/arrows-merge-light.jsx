import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.q7pfc7b8m {
  fill: currentColor;
  d: path("M190 40v64a6 6 0 0 1-1.76 4.24L134 162.49v55l21.76-21.75a6 6 0 0 1 8.48 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L122 217.51v-55l-54.24-54.27A6 6 0 0 1 66 104V40a6 6 0 0 1 12 0v61.51l50 50l50-50V40a6 6 0 0 1 12 0");
}
</style><path class="q7pfc7b8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrows-merge-light"} {...others} />);
}

export default Component;
