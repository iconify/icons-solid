import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.n6eojxbwe {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2h18a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}

.zzt-smbzn {
  d: path("M17 6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm0 15v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0m-8-2H3a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2");
}
</style><g class="cuyn6tgcc"><path class="n6eojxbwe"/><path class="zzt-smbzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:stepper-bulk-sharp"} {...others} />);
}

export default Component;
