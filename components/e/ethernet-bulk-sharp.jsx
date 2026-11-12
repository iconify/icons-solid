import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.dqguevbeq {
  d: path("M7 8v3a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0m4 0v3a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0m4 3a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0Zm4-3v3a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0");
}

.q6ln0hsar {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 3h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="q6ln0hsar"/><path class="dqguevbeq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ethernet-bulk-sharp"} {...others} />);
}

export default Component;
