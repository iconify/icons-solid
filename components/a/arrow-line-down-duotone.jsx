import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.b-j0neche {
  d: path("m200 112l-72 72l-72-72Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.ph-v66btv {
  d: path("M122.34 189.66a8 8 0 0 0 11.32 0l72-72A8 8 0 0 0 200 104h-64V32a8 8 0 0 0-16 0v72H56a8 8 0 0 0-5.66 13.66ZM180.69 120L128 172.69L75.31 120ZM224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8");
}
</style><g class="cuyn6tgcc"><path class="b-j0neche"/><path class="ph-v66btv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-line-down-duotone"} {...others} />);
}

export default Component;
