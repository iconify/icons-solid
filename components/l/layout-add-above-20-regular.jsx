import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.epjs4hbxq {
  fill: currentColor;
  d: path("M16.5 8a.5.5 0 0 1 .5.5V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8.5a.5.5 0 0 1 .5-.5zM4 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9H4zM16.5 3a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1z");
}
</style><path class="epjs4hbxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-add-above-20-regular"} {...others} />);
}

export default Component;
