import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b6r8t1brw {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}

.cuyn6tgcc {
  fill: currentColor;
}

.e1ajxz96l {
  d: path("M10.158 6.221a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558m0 5a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558m0 5a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558");
}
</style><g class="cuyn6tgcc"><path class="b6r8t1brw"/><path class="e1ajxz96l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:traffic-light-bulk-sharp"} {...others} />);
}

export default Component;
