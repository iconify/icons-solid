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

.w0d5zzb4m {
  d: path("M12.01 7a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Zm0 4a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Zm0 4a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="riis51qtn"/><path class="w0d5zzb4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:circle-more-vertical-bulk-round"} {...others} />);
}

export default Component;
