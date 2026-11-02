import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.riis51qtn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12");
}

.uvef6kbff {
  d: path("m13 11.667l2.8 3.733a1 1 0 0 1-1.6 1.2l-3-4a1 1 0 0 1-.2-.6V7a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="riis51qtn"/><path class="uvef6kbff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:clock-5-bulk-sharp"} {...others} />);
}

export default Component;
