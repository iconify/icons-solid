import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ld40g7b6l {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}

.nw82umbye {
  d: path("M7 6h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2m0 4h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2M6 21v-6a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0m10 0v-6a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0");
}
</style><g class="cuyn6tgcc"><path class="ld40g7b6l"/><path class="nw82umbye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:billboard-bulk-sharp"} {...others} />);
}

export default Component;
