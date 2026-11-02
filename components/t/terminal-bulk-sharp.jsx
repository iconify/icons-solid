import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bc11tac6h {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.nykaf1bdx {
  d: path("m7.707 8.293l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414L8.586 12L6.293 9.707a.999.999 0 1 1 1.414-1.414M13 14h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="bc11tac6h"/><path class="nykaf1bdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:terminal-bulk-sharp"} {...others} />);
}

export default Component;
