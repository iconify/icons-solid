import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.vknbzj-_b {
  fill: currentColor;
  d: path("M2 14a6 6 0 0 1 6-6h12a6 6 0 0 1 0 12H8a6 6 0 0 1-6-6m7 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6");
}
</style><path class="vknbzj-_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:toggle-left-28-filled"} {...others} />);
}

export default Component;
