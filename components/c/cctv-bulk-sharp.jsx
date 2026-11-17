import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.pf26gbcvg {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2h18a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m5 12a4 4 0 1 1 8 0a4 4 0 0 1-8 0");
}

.uvv_bhb9z {
  d: path("M18 14V7a1 1 0 0 1 2 0v7a8 8 0 0 1-16 0V7a1 1 0 0 1 2 0v7a6 6 0 1 0 12 0M8 14a4 4 0 1 1 8 0a4 4 0 0 1-8 0m2 0a2 2 0 1 0 3.999.001A2 2 0 0 0 10 14m2-1h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="pf26gbcvg"/><path class="uvv_bhb9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cctv-bulk-sharp"} {...others} />);
}

export default Component;
