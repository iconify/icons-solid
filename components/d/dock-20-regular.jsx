import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.yfd0ke92x {
  fill: currentColor;
  d: path("M10.354 3.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L9.5 4.707V12.5a.5.5 0 0 0 1 0V4.707l2.146 2.147a.5.5 0 0 0 .708-.708zM3 10.5A1.5 1.5 0 0 1 4.5 9h3a.5.5 0 0 0 0-1h-3A2.5 2.5 0 0 0 2 10.5v3A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-3A2.5 2.5 0 0 0 15.5 8h-3a.5.5 0 0 0 0 1h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 13.5z");
}
</style><path class="yfd0ke92x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:dock-20-regular"} {...others} />);
}

export default Component;
