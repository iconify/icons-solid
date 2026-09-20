import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.srsonn10v {
  fill: currentColor;
  d: path("M204 88v104a12 12 0 0 1-12 12H88a12 12 0 0 1 0-24h75L55.51 72.48a12 12 0 0 1 17-17L180 163V88a12 12 0 0 1 24 0");
}
</style><path class="srsonn10v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-down-right-bold"} {...others} />);
}

export default Component;
