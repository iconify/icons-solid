import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bh85_p_7j {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M22 7.066v9.868a2 2 0 0 1-1.114 1.793l-8 3.951a2 2 0 0 1-1.772 0l-8-3.951A2 2 0 0 1 2 16.934V7.066a2 2 0 0 1 1.114-1.793l8-3.951a2 2 0 0 1 1.772 0l8 3.951A2 2 0 0 1 22 7.066");
}

.cuyn6tgcc {
  fill: currentColor;
}

.ve5lzvb1w {
  d: path("m12 9.774l8.397-4.148a1.002 1.002 0 0 1 .886 1.794L13 11.51v10.375a1 1 0 0 1-2 0V11.51L2.717 7.42a1.002 1.002 0 0 1 .886-1.794Z");
}
</style><g class="cuyn6tgcc"><path class="bh85_p_7j"/><path class="ve5lzvb1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:box-bulk"} {...others} />);
}

export default Component;
