import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.qunqfeyqc {
  fill: currentColor;
  d: path("M216 208h-80v-72.58a56 56 0 1 0-16 0V208H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M88 80a40 40 0 1 1 40 40a40 40 0 0 1-40-40");
}
</style><path class="qunqfeyqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:map-pin-simple-line"} {...others} />);
}

export default Component;
