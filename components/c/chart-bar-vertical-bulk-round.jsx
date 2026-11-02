import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.kprizacfi {
  d: path("M14 8a1 1 0 0 1 2 0v12a1 1 0 0 1-2 0Zm-6 3a1 1 0 0 1 2 0v9a1 1 0 0 1-2 0Z");
}

.nybpznbdz {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9 6a3 3 0 1 1 6 0v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Zm13 4v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V10a3 3 0 0 1 6 0M2 13a2.999 2.999 0 1 1 6 0v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}
</style><g class="cuyn6tgcc"><path class="nybpznbdz"/><path class="kprizacfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-bar-vertical-bulk-round"} {...others} />);
}

export default Component;
