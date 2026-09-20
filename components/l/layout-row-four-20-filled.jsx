import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.o6_8lub5t {
  fill: currentColor;
  d: path("M3 14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3zm14-1v-2.5H3V13zm0-6v2.5H3V7zm0-1a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3z");
}
</style><path class="o6_8lub5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-row-four-20-filled"} {...others} />);
}

export default Component;
