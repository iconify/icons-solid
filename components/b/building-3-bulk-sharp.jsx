import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.fav0_kbnc {
  d: path("M3 19h1v-6a1 1 0 0 1 .375-.781l5-4a1 1 0 0 1 1.25 0l5 4A1 1 0 0 1 16 13v6h5a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m3 0h8v-5.519l-4-3.2l-4 3.2Z");
}

.u2px4ebgq {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Z");
}
</style><g class="cuyn6tgcc"><path class="u2px4ebgq"/><path class="fav0_kbnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-3-bulk-sharp"} {...others} />);
}

export default Component;
