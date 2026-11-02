import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.gn8f0r73z {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M11 7v10a4 4 0 0 1-8 0V7a4 4 0 0 1 8 0m10 2v6a4 4 0 0 1-8 0V9a4 4 0 0 1 8 0");
}

.kc6uogbct {
  d: path("M3 13a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2Z");
}
</style><g class="cuyn6tgcc"><path class="gn8f0r73z"/><path class="kc6uogbct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:align-center-vertical-bulk-round"} {...others} />);
}

export default Component;
