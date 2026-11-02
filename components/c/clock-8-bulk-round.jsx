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

.tw6uo-r2t {
  d: path("M13 12a1 1 0 0 1-.4.8l-4 3a1 1 0 0 1-1.2-1.6l3.6-2.7V7a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="riis51qtn"/><path class="tw6uo-r2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:clock-8-bulk-round"} {...others} />);
}

export default Component;
