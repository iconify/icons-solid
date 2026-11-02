import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ni4wblbcy {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M10 5h6c1.039 0 1.992.578 2.707 1.293l1 1a2.414 2.414 0 0 1 0 3.414l-1 1C17.992 12.422 17.039 13 16 13H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z");
}

.yd5rdxbnk {
  d: path("M13 3v3a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0m0 9v9a1 1 0 0 1-2 0v-9a1 1 0 0 1 2 0");
}
</style><g class="cuyn6tgcc"><path class="ni4wblbcy"/><path class="yd5rdxbnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:signpost-bulk"} {...others} />);
}

export default Component;
