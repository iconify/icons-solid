import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.dkrm_p5kn {
  d: path("M19 8h1a2 2 0 0 1 2 2v3a1 1 0 0 1-2 0v-3h-1a1 1 0 0 1 0-2m1 14h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2M8 19a1 1 0 0 1 2 0v1h3a1 1 0 0 1 0 2h-3a2 2 0 0 1-2-2Z");
}

.y0ggf09_y {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2");
}
</style><g class="cuyn6tgcc"><path class="y0ggf09_y"/><path class="dkrm_p5kn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:boolean-subtract-bulk"} {...others} />);
}

export default Component;
