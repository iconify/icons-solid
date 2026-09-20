import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.w9jsdsb8y {
  d: path("M6.5 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0");
}

.wf-0hpb3d {
  fill-rule: evenodd;
  d: path("M7.5 6a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1");
}
</style><g class="cuyn6tgcc"><path class="w9jsdsb8y"/><path clip-rule="evenodd" class="wf-0hpb3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:list"} {...others} />);
}

export default Component;
