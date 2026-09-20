import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.rzctlibej {
  fill: currentColor;
  d: path("M200 88v112a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V88a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m16-48H64a8 8 0 0 0 0 16h152v120a8 8 0 0 0 16 0V56a16 16 0 0 0-16-16");
}
</style><path class="rzctlibej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cards-fill"} {...others} />);
}

export default Component;
