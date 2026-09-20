import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ccgsjh9xr {
  fill: currentColor;
  d: path("M178.48 115.7A44 44 0 0 0 148 40H80a8 8 0 0 0-8 8v152a8 8 0 0 0 8 8h80a48 48 0 0 0 18.48-92.3M88 56h60a28 28 0 0 1 0 56H88Zm72 136H88v-64h72a32 32 0 0 1 0 64");
}
</style><path class="ccgsjh9xr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-b"} {...others} />);
}

export default Component;
