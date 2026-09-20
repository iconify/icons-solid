import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zb7_fhzpa {
  fill: currentColor;
  d: path("M176 58H80a70 70 0 0 0 0 140h96a70 70 0 0 0 0-140m0 128H80a58 58 0 0 1 0-116h96a58 58 0 0 1 0 116m0-96a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26");
}
</style><path class="zb7_fhzpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:toggle-right-light"} {...others} />);
}

export default Component;
