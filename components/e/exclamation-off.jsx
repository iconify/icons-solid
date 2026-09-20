import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.vu8ic4blg {
  d: path("M12 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}

.zx2fq2bkw {
  fill-rule: evenodd;
  d: path("M10 2a2 2 0 0 1 2 2v7a2 2 0 1 1-4 0V4a2 2 0 0 1 2-2");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="zx2fq2bkw"/><path class="vu8ic4blg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:exclamation-off"} {...others} />);
}

export default Component;
