import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.tbvdpibdd {
  fill: currentColor;
  d: path("M11 8a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1zM8.5 2a6.5 6.5 0 0 1 4.937 10.73l3.417 3.416a.5.5 0 0 1-.638.765l-.07-.058l-3.417-3.417A6.5 6.5 0 1 1 8.5 2m0 1a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11");
}
</style><path class="tbvdpibdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:zoom-out-20-regular"} {...others} />);
}

export default Component;
