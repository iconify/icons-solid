import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.r0zsneb_k {
  d: path("M5 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V4H7v3a1 1 0 0 1-2 0Zm9 7a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2Zm4 4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1ZM7 16v4h10v-4Z");
}

.tdtbhrb1u {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 7a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm8 5h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2");
}
</style><g class="cuyn6tgcc"><path class="tdtbhrb1u"/><path class="r0zsneb_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:printer-bulk-sharp"} {...others} />);
}

export default Component;
