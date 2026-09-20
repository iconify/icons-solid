import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.sv5_o3bwl {
  fill: currentColor;
  d: path("M6.5 1.766a1.5 1.5 0 0 0-1.5 1.5v1.75H3.5a1.5 1.5 0 0 0-1.5 1.5v2.985a1.5 1.5 0 0 0 1.5 1.5H5v1.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-1.5h1.5a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5H11V3.266a1.5 1.5 0 0 0-1.5-1.5z");
}
</style><path class="sv5_o3bwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:doctor-16-filled"} {...others} />);
}

export default Component;
