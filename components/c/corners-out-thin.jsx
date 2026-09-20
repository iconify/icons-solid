import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ndtidus0n {
  fill: currentColor;
  d: path("M212 48v40a4 4 0 0 1-8 0V52h-36a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4M88 204H52v-36a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4h40a4 4 0 0 0 0-8m120-40a4 4 0 0 0-4 4v36h-36a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4v-40a4 4 0 0 0-4-4M88 44H48a4 4 0 0 0-4 4v40a4 4 0 0 0 8 0V52h36a4 4 0 0 0 0-8");
}
</style><path class="ndtidus0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:corners-out-thin"} {...others} />);
}

export default Component;
