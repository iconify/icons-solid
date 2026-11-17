import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.hnrrbhb4p {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8.293 2.293a1 1 0 0 1 1.221-.15l10 6a1 1 0 0 1 .343 1.371a1 1 0 0 1-1.371.343L18 9.566v2.605A3 3 0 1 1 14 15a1 1 0 0 1 2 0a1.001 1.001 0 0 0 2 0a1 1 0 0 0-1-1a1 1 0 0 1-1-1V9a1 1 0 0 1 .158-.539L9.155 4.259L3.707 9.707a.999.999 0 1 1-1.414-1.414Z");
}

.ner_mbbnc {
  d: path("M10 8h11a1 1 0 0 1 0 2H10v10h2a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2h2V10H3a1 1 0 0 1 0-2h5V3a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="hnrrbhb4p"/><path class="ner_mbbnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:crane-bulk"} {...others} />);
}

export default Component;
