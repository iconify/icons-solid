import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.gfvwt-b2l {
  d: path("m213.66 141.66l-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 204.69l74.34-74.35a8 8 0 0 1 11.32 11.32m-171.32-80A8 8 0 0 1 48 48h160a8 8 0 0 1 5.66 13.66l-80 80a8 8 0 0 1-11.32 0Zm25 2.34L128 124.69L188.69 64Z");
}

.i5r38-bvk {
  d: path("m208 56l-80 80l-80-80Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="i5r38-bvk"/><path class="gfvwt-b2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-double-down-duotone"} {...others} />);
}

export default Component;
