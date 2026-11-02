import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.jrbq1jb7d {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}

.lqgw2rbvs {
  d: path("M15.685 9.557a4 4 0 0 1-4.48 2.363A4 4 0 0 1 8 8a1 1 0 0 1 2 0a2 2 0 1 0 4 0a1 1 0 0 1 2 0a4 4 0 0 1-.315 1.557");
}
</style><g class="cuyn6tgcc"><path class="jrbq1jb7d"/><path class="lqgw2rbvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shopping-bag-alt-bulk-sharp"} {...others} />);
}

export default Component;
