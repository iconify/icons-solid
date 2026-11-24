import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.i8igrhb4v {
  d: path("m12.966 4.742l4 15a1 1 0 1 1-1.932.516l-4-15a1 1 0 1 1 1.932-.516");
}

.nk_0s_cfm {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m12.832 4.445l8.891 13.336A2.071 2.071 0 0 1 20 21H4a2.069 2.069 0 0 1-1.723-3.219l8.891-13.336a1 1 0 0 1 1.664 0");
}
</style><g class="cuyn6tgcc"><path class="nk_0s_cfm"/><path class="i8igrhb4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:pyramid-bulk"} {...others} />);
}

export default Component;
