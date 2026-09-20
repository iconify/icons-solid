import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.b8xw4hb0t {
  fill: currentColor;
  d: path("M176 58H80a70 70 0 0 0 0 140h96a70 70 0 0 0 0-140m0 128H80a58 58 0 0 1 0-116h96a58 58 0 0 1 0 116M80 90a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26");
}
</style><path class="b8xw4hb0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:toggle-left-light"} {...others} />);
}

export default Component;
