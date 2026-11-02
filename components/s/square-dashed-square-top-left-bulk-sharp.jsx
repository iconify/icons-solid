import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.dh1nzzhhn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}

.gy-opgrzt {
  d: path("M2 14V3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1M22 3v3a1 1 0 0 1-2 0V4h-2a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1M4 4v9h9V4Zm16 10v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0M2 21v-3a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1m19 1h-3a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1m-11-2h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="dh1nzzhhn"/><path class="gy-opgrzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-dashed-square-top-left-bulk-sharp"} {...others} />);
}

export default Component;
