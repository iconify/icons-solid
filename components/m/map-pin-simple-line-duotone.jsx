import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.a2y8hljng {
  d: path("M216 208h-80v-72.58a56 56 0 1 0-16 0V208H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M88 80a40 40 0 1 1 40 40a40 40 0 0 1-40-40");
}

.cuyn6tgcc {
  fill: currentColor;
}

.yp57fmbsa {
  d: path("M176 80a48 48 0 1 1-48-48a48 48 0 0 1 48 48");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="yp57fmbsa"/><path class="a2y8hljng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:map-pin-simple-line-duotone"} {...others} />);
}

export default Component;
