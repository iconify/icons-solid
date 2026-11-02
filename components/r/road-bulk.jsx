import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ki5efeb2l {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M13 9a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0Zm0 6a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm0 6a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Z");
}

.qxssknb4n {
  d: path("M8.051 2.684a1.001 1.001 0 0 1 1.898.632l-6 18a1.001 1.001 0 0 1-1.898-.632Zm6 .632a1.001 1.001 0 0 1 1.898-.632l6 18a1.001 1.001 0 0 1-1.898.632Z");
}
</style><g class="cuyn6tgcc"><path class="ki5efeb2l"/><path class="qxssknb4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:road-bulk"} {...others} />);
}

export default Component;
