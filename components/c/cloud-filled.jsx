import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.mwyb9cv3b {
  width: 16px;
  height: 8px;
  x: 2px;
  y: 6px;
  rx: 4px;
}

.w-0i0z5mu {
  width: 9px;
  height: 8px;
  x: 6px;
  y: 3px;
  rx: 4px;
}
</style><g class="cuyn6tgcc"><rect class="mwyb9cv3b"/><rect class="w-0i0z5mu"/><rect class="mwyb9cv3b"/><rect class="w-0i0z5mu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:cloud-filled"} {...others} />);
}

export default Component;
