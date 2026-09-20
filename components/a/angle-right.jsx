import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.lhz09l8zb {
  d: path("M6.732 4.64a1 1 0 0 1 1.536-1.28l5 6a1 1 0 1 1-1.536 1.28z");
}

.ze6dckb4b {
  d: path("M11.732 9.36a1 1 0 1 1 1.536 1.28l-5 6a1 1 0 1 1-1.536-1.28z");
}
</style><g class="cuyn6tgcc"><path class="ze6dckb4b"/><path class="lhz09l8zb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:angle-right"} {...others} />);
}

export default Component;
