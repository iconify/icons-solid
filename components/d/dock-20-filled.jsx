import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.e008vfb4a {
  fill: currentColor;
  d: path("M10.53 3.22a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06l1.22-1.22v6.69a.75.75 0 0 0 1.5 0V5.56l1.22 1.22a.75.75 0 1 0 1.06-1.06zM3.5 10.5a1 1 0 0 1 1-1h2.75a.75.75 0 0 0 0-1.5H4.5A2.5 2.5 0 0 0 2 10.5v3A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-3A2.5 2.5 0 0 0 15.5 8h-2.75a.75.75 0 0 0 0 1.5h2.75a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1z");
}
</style><path class="e008vfb4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:dock-20-filled"} {...others} />);
}

export default Component;
