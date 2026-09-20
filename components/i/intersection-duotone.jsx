import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.q7ov9490v {
  d: path("M200 120v80H56v-80a72 72 0 0 1 144 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y6ga_y32j {
  d: path("M208 120v80a8 8 0 0 1-16 0v-80a64 64 0 0 0-128 0v80a8 8 0 0 1-16 0v-80a80 80 0 0 1 160 0");
}
</style><g class="cuyn6tgcc"><path class="q7ov9490v"/><path class="y6ga_y32j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:intersection-duotone"} {...others} />);
}

export default Component;
