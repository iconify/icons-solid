import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.k645rez1q {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 3h12a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8m4 17a1 1 0 0 1-1 1H6a4 4 0 0 1 0-8h3a1 1 0 0 1 1 1Z");
}

.wk5fhb80u {
  d: path("M7.01 6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2ZM18 18a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0ZM7.01 16a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm10 4a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="k645rez1q"/><path class="wk5fhb80u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:server-warning-corner-bulk-round"} {...others} />);
}

export default Component;
