import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.mc4chxb8t {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M11 2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm10 10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z");
}

.y9velvwdb {
  d: path("M6 11a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1Z");
}
</style><g class="cuyn6tgcc"><path class="mc4chxb8t"/><path class="y9velvwdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:workflow-bulk-sharp"} {...others} />);
}

export default Component;
