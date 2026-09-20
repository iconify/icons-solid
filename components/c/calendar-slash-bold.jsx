import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.s9klfsf5r {
  fill: currentColor;
  d: path("M56.88 31.93A12 12 0 0 0 48 28a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a12 12 0 0 0 8.88-20.07ZM52 204V62.24L180.87 204ZM228 48v117.34a12 12 0 1 1-24 0V100h-58.31a12 12 0 0 1 0-24H204V52h-16a12 12 0 0 1-24 0h-61.94a12 12 0 0 1 0-24H164v-4a12 12 0 0 1 24 0v4h20a20 20 0 0 1 20 20");
}
</style><path class="s9klfsf5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:calendar-slash-bold"} {...others} />);
}

export default Component;
