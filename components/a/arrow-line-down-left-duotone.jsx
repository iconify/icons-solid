import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.d3ag7ub5l {
  d: path("M232 48a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-42.34 42.34a8 8 0 0 1 0 11.32L131.31 160l42.35 42.34A8 8 0 0 1 168 216H72a8 8 0 0 1-8-8v-96a8 8 0 0 1 13.66-5.66L120 148.69l58.34-58.35a8 8 0 0 1 11.32 0M148.69 200l-34.34-34.34L80 131.31V200Z");
}

.e2-wfbbbz {
  d: path("M168 208H72v-96Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="e2-wfbbbz"/><path class="d3ag7ub5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-line-down-left-duotone"} {...others} />);
}

export default Component;
