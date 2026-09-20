import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.sl61kdbop {
  fill: currentColor;
  d: path("M22.293 4.293a1 1 0 1 1 1.414 1.414L15.414 14l8.293 8.293a1 1 0 0 1-1.414 1.414L14 15.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L12.586 14L4.293 5.707a1 1 0 0 1 1.414-1.414L14 12.586z");
}
</style><path class="sl61kdbop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:dismiss-28-filled"} {...others} />);
}

export default Component;
