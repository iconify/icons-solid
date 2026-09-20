import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.pk_r8cbwx {
  fill: currentColor;
  d: path("M216 76h-28V48a20 20 0 0 0-20-20H40a20 20 0 0 0-20 20v128a12 12 0 0 0 19.54 9.33l28.46-23V184a20 20 0 0 0 20 20h92.17l36.29 29.33A12 12 0 0 0 236 224V96a20 20 0 0 0-20-20M44 150.87V52h120v80H71.58a12 12 0 0 0-7.58 2.67Zm168 48l-20-16.2a12 12 0 0 0-7.54-2.67H92v-24h76a20 20 0 0 0 20-20v-36h24Z");
}
</style><path class="pk_r8cbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:chats-bold"} {...others} />);
}

export default Component;
