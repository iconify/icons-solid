import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.cw4fcrwag {
  d: path("M14 13h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H20a1 1 0 0 1 0-2m-5 7a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm5-3a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2Z");
}

.psve2dmma {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm10 0a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3ZM3 16a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Z");
}
</style><g class="cuyn6tgcc"><path class="psve2dmma"/><path class="cw4fcrwag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:qr-code-bulk-round"} {...others} />);
}

export default Component;
