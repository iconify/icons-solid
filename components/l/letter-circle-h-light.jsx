import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.wy3n-l36a {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m38-130v80a6 6 0 0 1-12 0v-34h-52v34a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0v34h52V88a6 6 0 0 1 12 0");
}
</style><path class="wy3n-l36a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:letter-circle-h-light"} {...others} />);
}

export default Component;
