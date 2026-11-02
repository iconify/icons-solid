import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.kkb4o8mts {
  d: path("M10 9a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm6-6v6a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0M6 9v11h3v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5h3V9a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0m7 11v-4h-2v4Z");
}

.ngcdaw37h {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}
</style><g class="cuyn6tgcc"><path class="ngcdaw37h"/><path class="kkb4o8mts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:store-bulk-sharp"} {...others} />);
}

export default Component;
