import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.kq0_ojb0x {
  d: path("M120 128a32 32 0 1 0-32 32a32 32 0 0 0 32-32m-48 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16m152-24h-16V40a8 8 0 0 0-8-8h-96a8 8 0 0 0-8 8v24H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32v16a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-96a8 8 0 0 0-8-8m-58.34 60L216 127.65v72.7ZM112 48h80v77.24l-40 28.89V80a16 16 0 0 0-16-16h-24ZM40 80h96v96H40Zm48 112h48a16 16 0 0 0 16-16v-2.13L199.26 208H88Z");
}

.mvdqy-4gs {
  d: path("M144 80v96a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="mvdqy-4gs"/><path class="kq0_ojb0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:microsoft-outlook-logo-duotone"} {...others} />);
}

export default Component;
