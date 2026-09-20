import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.otb-eqw5r {
  fill: currentColor;
  d: path("M228 160V96a12 12 0 0 0-12-12h-44V40a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h44v44a12 12 0 0 0 12 12h120a12 12 0 0 0 12-12zm-63 44l-32-32h22l32 32Zm7-49v-22l32 32v22Zm32-24l-23-23h23ZM52 52h96v96H52Zm56 129l23 23h-23Z");
}
</style><path class="otb-eqw5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:subtract-square-bold"} {...others} />);
}

export default Component;
