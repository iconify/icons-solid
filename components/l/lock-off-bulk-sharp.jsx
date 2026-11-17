import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.hgj7sh0hq {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M19 22H4a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h2Zm2-2.243L10.243 9H20a1 1 0 0 1 1 1Z");
}

.pj220gbcd {
  d: path("M16 6v4a1 1 0 0 1-2 0V6a2 2 0 1 0-4 0a1 1 0 0 1-2 0a4 4 0 0 1 8 0M2.707 4.293l17 17a.999.999 0 1 1-1.414 1.414l-17-17a.999.999 0 1 1 1.414-1.414");
}
</style><g class="cuyn6tgcc"><path class="hgj7sh0hq"/><path class="pj220gbcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-off-bulk-sharp"} {...others} />);
}

export default Component;
