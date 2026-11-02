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

.xgpw7uedo {
  d: path("M13 10h-1.586l4.293 4.293a.999.999 0 1 1-1.414 1.414L10 11.414V13a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2");
}
</style><g class="cuyn6tgcc"><path class="riis51qtn"/><path class="xgpw7uedo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:circle-arrow-up-left-bulk-round"} {...others} />);
}

export default Component;
