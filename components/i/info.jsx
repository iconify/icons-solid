import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.fepf0accp {
  fill-rule: evenodd;
  d: path("M10 7a2 2 0 0 1 2 2v7a2 2 0 1 1-4 0V9a2 2 0 0 1 2-2");
}

.qzzct-bwg {
  d: path("M12 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="fepf0accp"/><path class="qzzct-bwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:info"} {...others} />);
}

export default Component;
