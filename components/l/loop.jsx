import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.o_9cyhf-j {
  d: path("M11.192 13.314a1.5 1.5 0 1 1 2.122-2.122l3.535 3.536a1.5 1.5 0 1 1-2.121 2.121z");
}

.qd0_j1bvi {
  fill-rule: evenodd;
  d: path("M4.475 4.475a5.5 5.5 0 1 0 7.778 7.778a5.5 5.5 0 0 0-7.778-7.778m6.364 6.364a3.5 3.5 0 1 1-4.95-4.95a3.5 3.5 0 0 1 4.95 4.95");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="qd0_j1bvi"/><path class="o_9cyhf-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:loop"} {...others} />);
}

export default Component;
