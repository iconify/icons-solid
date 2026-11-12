import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.mxw9ye2yk {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M13 11h5a1 1 0 0 1 0 2h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5V6a1 1 0 0 1 2 0Z");
}

.vslzg3i3x {
  d: path("M3.01 2a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm6 0a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Zm6 0a1 1 0 0 1 0 2H15a1 1 0 0 1 0-2Zm5.98 2a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2ZM3.01 8a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm17.98 2a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2ZM3.01 14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm17.98 2a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2ZM3.01 20a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm6 0a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Zm6 0a1 1 0 0 1 0 2H15a1 1 0 0 1 0-2Zm5.98 2a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2Z");
}
</style><g class="cuyn6tgcc"><path class="mxw9ye2yk"/><path class="vslzg3i3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:border-inner-bulk-round"} {...others} />);
}

export default Component;
