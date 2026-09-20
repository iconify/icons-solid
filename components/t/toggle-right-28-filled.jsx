import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.jye4zmbqs {
  fill: currentColor;
  d: path("M26 14a6 6 0 0 0-6-6H8a6 6 0 0 0 0 12h12a6 6 0 0 0 6-6m-7 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6");
}
</style><path class="jye4zmbqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:toggle-right-28-filled"} {...others} />);
}

export default Component;
