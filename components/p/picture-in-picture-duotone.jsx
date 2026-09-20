import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.eto9ddc8m {
  d: path("M224 64v64h-88v72H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r25fvsbot {
  d: path("M216 48H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M40 64h176v56h-80a8 8 0 0 0-8 8v64H40Zm176 128h-72v-56h72z");
}
</style><g class="cuyn6tgcc"><path class="eto9ddc8m"/><path class="r25fvsbot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:picture-in-picture-duotone"} {...others} />);
}

export default Component;
