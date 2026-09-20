import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.rumt2jndg {
  fill: currentColor;
  d: path("M168 136V96H88a48 48 0 0 0 0 96h88a8 8 0 0 1 0 16H88a64 64 0 0 1 0-128h80V40a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32l-48 48A8 8 0 0 1 168 136");
}
</style><path class="rumt2jndg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-u-up-right-fill"} {...others} />);
}

export default Component;
