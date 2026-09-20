import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.u8_jzvbir {
  fill: currentColor;
  d: path("M2 13.5a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm12-9A2.5 2.5 0 0 0 11.5 2h-5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h5a2.5 2.5 0 0 0 2.5-2.5zM7 13v-2h3v2zm0-3V6h3v4zm0-5V3h3v2zm6 1v4h-2V6zm0 5v.5a1.5 1.5 0 0 1-1.5 1.5H11v-2zm0-6h-2V3h.5A1.5 1.5 0 0 1 13 4.5z");
}
</style><path class="u8_jzvbir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-stack-left-16-regular"} {...others} />);
}

export default Component;
