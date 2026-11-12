import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.fad-bxasp {
  d: path("M21 5a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2ZM9 17a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}

.uwqutdyno {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M13.01 17a1 1 0 0 1 0 2H13a1 1 0 0 1 0-2Zm4 0a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2Zm3.98 2a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2Z");
}
</style><g class="cuyn6tgcc"><path class="uwqutdyno"/><path class="fad-bxasp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:text-truncate-bulk-sharp"} {...others} />);
}

export default Component;
