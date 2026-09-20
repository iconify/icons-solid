import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.i59bjabmj {
  fill: currentColor;
  d: path("M25.996 7.75A3.75 3.75 0 0 0 22.246 4H5.75A3.75 3.75 0 0 0 2 7.75v11.5A3.75 3.75 0 0 0 5.75 23h16.496a3.75 3.75 0 0 0 3.75-3.75zM5.75 21.5a2.25 2.25 0 0 1-2.25-2.25V7.75A2.25 2.25 0 0 1 5.75 5.5H17.5v16z");
}
</style><path class="i59bjabmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:dock-right-28-filled"} {...others} />);
}

export default Component;
