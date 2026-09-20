import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.wab03dvhs {
  fill: currentColor;
  d: path("M17 7V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v1zM3 8v4h14V8zm0 6v-1h14v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3");
}
</style><path class="wab03dvhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-row-three-20-filled"} {...others} />);
}

export default Component;
