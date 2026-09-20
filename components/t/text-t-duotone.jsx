import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ftduy_boz {
  d: path("M200 56v128a16 16 0 0 1-16 16H72a16 16 0 0 1-16-16V56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zp7dm92jy {
  d: path("M208 56v32a8 8 0 0 1-16 0V64h-56v128h24a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16h24V64H64v24a8 8 0 0 1-16 0V56a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8");
}
</style><g class="cuyn6tgcc"><path class="ftduy_boz"/><path class="zp7dm92jy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-t-duotone"} {...others} />);
}

export default Component;
