import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.j7bu03bpq {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 4h5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2");
}

.yv7q-2o8r {
  d: path("M18 13a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Zm-5 2v3h5v-3Z");
}
</style><g class="cuyn6tgcc"><path class="j7bu03bpq"/><path class="yv7q-2o8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ungroup-bulk"} {...others} />);
}

export default Component;
