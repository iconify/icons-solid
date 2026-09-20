import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.hohzx5b_l {
  d: path("M224 40a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-24 64v96a8 8 0 0 1-8 8H96a8 8 0 0 1-5.66-13.66L132.69 152L74.34 93.66a8 8 0 0 1 11.32-11.32L144 140.69l42.34-42.35A8 8 0 0 1 200 104m-16 19.31l-34.34 34.35L115.31 192H184Z");
}

.qo0hq7bkk {
  d: path("M192 104v96H96Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="qo0hq7bkk"/><path class="hohzx5b_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-line-down-right-duotone"} {...others} />);
}

export default Component;
