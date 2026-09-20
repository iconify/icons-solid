import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.tp0v16b7y {
  fill: currentColor;
  d: path("M167.51 127.51L195 100H88a44 44 0 0 0 0 88h88a12 12 0 0 1 0 24H88a68 68 0 0 1 0-136h107l-27.49-27.51a12 12 0 1 1 17-17l48 48a12 12 0 0 1 0 17l-48 48a12 12 0 0 1-17-17Z");
}
</style><path class="tp0v16b7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-u-up-right-bold"} {...others} />);
}

export default Component;
