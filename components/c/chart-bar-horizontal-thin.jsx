import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zuuvm3mrj {
  fill: currentColor;
  d: path("M224 100h-44V56a4 4 0 0 0-4-4H52V40a4 4 0 0 0-8 0v176a4 4 0 0 0 8 0v-12h92a4 4 0 0 0 4-4v-44h76a4 4 0 0 0 4-4v-48a4 4 0 0 0-4-4m-52-40v40H52V60Zm-32 136H52v-40h88Zm80-48H52v-40h168Z");
}
</style><path class="zuuvm3mrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:chart-bar-horizontal-thin"} {...others} />);
}

export default Component;
