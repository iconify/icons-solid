import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.g9gvmtond {
  fill: currentColor;
  d: path("M248 64H8a8 8 0 0 0 0 16h8v112a8 8 0 0 0 16 0v-48h192v48a8 8 0 0 0 16 0V80h8a8 8 0 0 0 0-16M32 80h88v48H32Zm192 48h-88V80h88ZM96 104a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8m64 0a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16h-24a8 8 0 0 1-8-8");
}
</style><path class="g9gvmtond"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:desk"} {...others} />);
}

export default Component;
