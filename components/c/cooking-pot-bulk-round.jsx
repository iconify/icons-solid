import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.m-_cscbna {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M19 10a1 1 0 0 1 1 1v5a5 5 0 0 1-1.464 3.536A5 5 0 0 1 15 21H9a5 5 0 0 1-5-5v-5a1 1 0 0 1 1-1h.366a7.5 7.5 0 0 1 13.268 0Z");
}

.uuea8obgy {
  d: path("M14 5h-1v2a1 1 0 0 1-2 0V5h-1a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m5 7H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2M5 15H3a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2m16 0h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2");
}
</style><g class="cuyn6tgcc"><path class="m-_cscbna"/><path class="uuea8obgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cooking-pot-bulk-round"} {...others} />);
}

export default Component;
