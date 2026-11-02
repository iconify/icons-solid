import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.u2px4ebgq {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Z");
}

.zlsddbcxr {
  d: path("M3 19h1v-5c0-.265.105-.52.293-.707l5-5a1 1 0 0 1 1.414 0l5 5A1 1 0 0 1 16 14v5h5a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m3 0h8v-4.586l-4-4l-4 4Z");
}
</style><g class="cuyn6tgcc"><path class="u2px4ebgq"/><path class="zlsddbcxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-3-bulk-sharp"} {...others} />);
}

export default Component;
