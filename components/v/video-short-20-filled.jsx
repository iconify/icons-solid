import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.saikndfvo {
  fill: currentColor;
  d: path("M13.154 2.004A3 3 0 0 1 16 5v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zm-3.64 5.64A1 1 0 0 0 8 8.502v2.996a1 1 0 0 0 1.514.858l2.504-1.498a1 1 0 0 0 0-1.716z");
}
</style><path class="saikndfvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:video-short-20-filled"} {...others} />);
}

export default Component;
