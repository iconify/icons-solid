import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.qyf3a35ct {
  d: path("M15 2a1 1 0 0 1 0 2h-2v3a1 1 0 0 1-2 0V4H9a1 1 0 0 1 0-2Zm6 18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}

.t21-v8bgo {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 17V7a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m2-6h3V8H4Zm5 0h3V8H9Zm5 0h6V8h-6Z");
}
</style><g class="cuyn6tgcc"><path class="t21-v8bgo"/><path class="qyf3a35ct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tram-side-bulk-sharp"} {...others} />);
}

export default Component;
