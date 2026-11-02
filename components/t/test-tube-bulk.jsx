import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.dd5846bml {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v15a4 4 0 0 1-8 0Z");
}

.vb6diu8xm {
  d: path("M7 4a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Zm2 7h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="dd5846bml"/><path class="vb6diu8xm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:test-tube-bulk"} {...others} />);
}

export default Component;
