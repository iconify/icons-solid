import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ki2vueivy {
  fill-rule: evenodd;
  d: path("M4.828 4.828a6 6 0 1 0 8.486 8.486a6 6 0 0 0-8.486-8.486M11.9 11.9a4 4 0 1 1-5.656-5.656A4 4 0 0 1 11.9 11.9");
}

.q16qzj1ip {
  d: path("M11.9 14.728a1.5 1.5 0 1 1 2.12-2.121l3.536 3.535a1.5 1.5 0 1 1-2.121 2.121zM6.707 9.914a1 1 0 1 1 0-2h4.485a1 1 0 1 1 0 2z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="ki2vueivy"/><path class="q16qzj1ip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:loop-minus"} {...others} />);
}

export default Component;
