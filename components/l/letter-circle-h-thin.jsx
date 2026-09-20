import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.h6ah99r7t {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m36-132v80a4 4 0 0 1-8 0v-36h-56v36a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0v36h56V88a4 4 0 0 1 8 0");
}
</style><path class="h6ah99r7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:letter-circle-h-thin"} {...others} />);
}

export default Component;
