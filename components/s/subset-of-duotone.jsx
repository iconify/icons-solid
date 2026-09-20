import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.lq0ydsbfk {
  d: path("M208 208a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h152a8 8 0 0 1 8 8m-8-48h-96a48 48 0 0 1 0-96h96a8 8 0 0 0 0-16h-96a64 64 0 0 0 0 128h96a8 8 0 0 0 0-16");
}

.q0pi412gg {
  d: path("M200 56v112h-96a56 56 0 0 1 0-112Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="q0pi412gg"/><path class="lq0ydsbfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:subset-of-duotone"} {...others} />);
}

export default Component;
