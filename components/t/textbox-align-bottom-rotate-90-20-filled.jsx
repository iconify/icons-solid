import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.cac4_3bpp {
  fill: currentColor;
  d: path("M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5zm-7 1v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0m-3 0v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0");
}
</style><path class="cac4_3bpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:textbox-align-bottom-rotate-90-20-filled"} {...others} />);
}

export default Component;
