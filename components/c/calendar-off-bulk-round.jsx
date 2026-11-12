import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cn-spmb5d {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 16.757L8.243 4H16a5 5 0 0 1 5 5ZM4.999 4.999l15.002 15.002A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5V9c0-1.576.737-3.057 1.999-4.001");
}

.cuyn6tgcc {
  fill: currentColor;
}

.jbb6cgk7b {
  d: path("m9.707 8.293l13 13a.999.999 0 1 1-1.414 1.414L8.586 10H4a1 1 0 0 1 0-2h2.586L1.293 2.707a.999.999 0 1 1 1.414-1.414ZM17 5a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm3 3a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="cn-spmb5d"/><path class="jbb6cgk7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:calendar-off-bulk-round"} {...others} />);
}

export default Component;
