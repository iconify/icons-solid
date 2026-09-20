import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.kk348caxc {
  fill: currentColor;
  d: path("M220 144v64a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-64a4 4 0 0 1 8 0v60h168v-60a4 4 0 0 1 8 0m-94.83 2.83a4 4 0 0 0 5.66 0l40-40a4 4 0 1 0-5.66-5.66L132 134.34V32a4 4 0 0 0-8 0v102.34l-33.17-33.17a4 4 0 0 0-5.66 5.66Z");
}
</style><path class="kk348caxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:download-simple-thin"} {...others} />);
}

export default Component;
