import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.n36qpwqix {
  d: path("M18.586 4H15a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V5.414l-7.293 7.293a.999.999 0 1 1-1.414-1.414Z");
}

.wb73dcc1r {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 16a6 6 0 1 1 12 0a6 6 0 0 1-12 0");
}
</style><g class="cuyn6tgcc"><path class="wb73dcc1r"/><path class="n36qpwqix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mars-bulk-round"} {...others} />);
}

export default Component;
