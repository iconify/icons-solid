import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ikb8-47xq {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4.384 12a7.617 7.617 0 1 1 15.233 0a7.617 7.617 0 1 1-15.233 0");
}

.w-e4bfihv {
  d: path("M5.001 10H5a.997.997 0 0 1-1-1V3a1 1 0 0 1 2 0v2.817a8.615 8.615 0 0 1 13.919 2.789a.999.999 0 1 1-1.838.788A6.615 6.615 0 0 0 6.729 8H11a1 1 0 0 1 0 2Zm12.27 6H13a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-2.817a8.615 8.615 0 0 1-13.919-2.789a.999.999 0 1 1 1.838-.788A6.614 6.614 0 0 0 17.271 16");
}
</style><g class="cuyn6tgcc"><path class="ikb8-47xq"/><path class="w-e4bfihv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:reload-bulk"} {...others} />);
}

export default Component;
