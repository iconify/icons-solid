import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.t6uxm5bra {
  fill: currentColor;
  d: path("M216 20H72a44.05 44.05 0 0 0-44 44v72a28 28 0 0 0 28 28h39.64L92 207v1a36 36 0 0 0 72 0v-1l-3.6-43H200a28 28 0 0 0 28-28V32a12 12 0 0 0-12-12M72 44h88v24a12 12 0 0 0 24 0V44h20v52H52V64a20 20 0 0 1 20-20m128 96h-44a20 20 0 0 0-19.85 22.4l3.84 46a12 12 0 0 1-24 0l3.84-46A20 20 0 0 0 100 140H56a4 4 0 0 1-4-4v-16h152v16a4 4 0 0 1-4 4");
}
</style><path class="t6uxm5bra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:paint-brush-broad-bold"} {...others} />);
}

export default Component;
