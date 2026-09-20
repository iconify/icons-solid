import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.byemyabwl {
  d: path("M208 208a8 8 0 0 1-8 8h-72a88 88 0 0 1 0-176h72a8 8 0 0 1 0 16h-72a72 72 0 0 0 0 144h72a8 8 0 0 1 8 8");
}

.cuyn6tgcc {
  fill: currentColor;
}

.ymfviwb7a {
  d: path("M200 48v160h-72a80 80 0 0 1-80-80a80 80 0 0 1 80-80Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="ymfviwb7a"/><path class="byemyabwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:subset-proper-of-duotone"} {...others} />);
}

export default Component;
