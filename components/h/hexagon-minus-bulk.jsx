import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.z7pcgrb_q {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 8.236v7.528a3 3 0 0 1-1.658 2.683l-6 3a3 3 0 0 1-2.684 0l-6-3A3 3 0 0 1 3 15.764V8.236a3 3 0 0 1 1.658-2.683l6-3a3 3 0 0 1 2.684 0l6 3A3 3 0 0 1 21 8.236");
}

.zoty4-bai {
  d: path("M9 11h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="z7pcgrb_q"/><path class="zoty4-bai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hexagon-minus-bulk"} {...others} />);
}

export default Component;
