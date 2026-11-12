import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.jo5lz5bcg {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m12.707 5.293l6 6a1 1 0 0 1 0 1.414l-4 4A1 1 0 0 1 14 17h-2.586l-4.707 4.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414L7 12.586V10c0-.265.105-.52.293-.707l4-4a1 1 0 0 1 1.414 0");
}

.v800_2rhu {
  d: path("m9.707 8.293l6 6a.999.999 0 1 1-1.414 1.414l-6-6a.999.999 0 1 1 1.414-1.414");
}
</style><g class="cuyn6tgcc"><path class="jo5lz5bcg"/><path class="v800_2rhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flashlight-off-bulk-sharp"} {...others} />);
}

export default Component;
