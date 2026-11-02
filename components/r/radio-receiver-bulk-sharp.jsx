import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.nqj6gmzsi {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 9a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}

.u4z6b_b8h {
  d: path("m6.486 8.143l10-6a1 1 0 0 1 1.371.343a1 1 0 0 1-.343 1.371l-10 6a1 1 0 0 1-1.371-.343a1 1 0 0 1 .343-1.371M6 15a3 3 0 1 1 6 0a3 3 0 0 1-6 0m11-3a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Zm-9 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m7 1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="nqj6gmzsi"/><path class="u4z6b_b8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:radio-receiver-bulk-sharp"} {...others} />);
}

export default Component;
