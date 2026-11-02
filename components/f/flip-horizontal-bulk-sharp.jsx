import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.gqwbotqps {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m3.707 6.293l5 5a1 1 0 0 1 0 1.414l-5 5A1 1 0 0 1 2 17V7a1.002 1.002 0 0 1 1.707-.707m16.586 0A1 1 0 0 1 22 7v10a1.002 1.002 0 0 1-1.707.707l-5-5a1 1 0 0 1 0-1.414Z");
}

.uu8iy5mdc {
  d: path("M13 7a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Zm0 6a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm0 6a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="gqwbotqps"/><path class="uu8iy5mdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flip-horizontal-bulk-sharp"} {...others} />);
}

export default Component;
