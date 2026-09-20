import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.auyu_sbjl {
  d: path("M208 88v112a32 32 0 0 1-32 32H80a32 32 0 0 1-32-32V88a32 32 0 0 1 32-32h96a32 32 0 0 1 32 32");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.iqmbmjllk {
  d: path("M184 48.81V32a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v16.81A40.05 40.05 0 0 0 40 88v112a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40V88a40.05 40.05 0 0 0-32-39.19M168 48h-16V32h16Zm-48 0V32h16v16Zm-16-16v16H88V32Zm96 168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V88a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24Z");
}
</style><g class="cuyn6tgcc"><path class="auyu_sbjl"/><path class="iqmbmjllk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:jar-duotone"} {...others} />);
}

export default Component;
