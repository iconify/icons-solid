import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.wqrvqvscl {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z");
}

.zzt-smbzn {
  d: path("M17 6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm0 15v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0m-8-2H3a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2");
}
</style><g class="cuyn6tgcc"><path class="wqrvqvscl"/><path class="zzt-smbzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:stepper-bulk-round"} {...others} />);
}

export default Component;
