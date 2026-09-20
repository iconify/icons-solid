import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.g3vb5kr1j {
  fill: currentColor;
  d: path("M208 96H48a20 20 0 0 0-20 20v84a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-84a20 20 0 0 0-20-20m-4 100H52v-76h152ZM44 68a12 12 0 0 1 12-12h144a12 12 0 0 1 0 24H56a12 12 0 0 1-12-12m16-40a12 12 0 0 1 12-12h112a12 12 0 0 1 0 24H72a12 12 0 0 1-12-12");
}
</style><path class="g3vb5kr1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cards-three-bold"} {...others} />);
}

export default Component;
