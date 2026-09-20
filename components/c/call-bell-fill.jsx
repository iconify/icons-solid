import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.jk0xqvbip {
  fill: currentColor;
  d: path("M16 176a8 8 0 0 1 8-8h8v-16a96.12 96.12 0 0 1 88-95.66V40h-16a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16h-16v16.34A96.12 96.12 0 0 1 224 152v16h8a8 8 0 0 1 0 16H24a8 8 0 0 1-8-8m216 24H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16");
}
</style><path class="jk0xqvbip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:call-bell-fill"} {...others} />);
}

export default Component;
