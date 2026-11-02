import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.iz1sfcctr {
  d: path("M5 3v18a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0");
}

.rzmf2iiub {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 3h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m0 10h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="rzmf2iiub"/><path class="iz1sfcctr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:align-left-bulk-sharp"} {...others} />);
}

export default Component;
