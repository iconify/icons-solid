import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.szsy4g-3y {
  fill: currentColor;
  d: path("M13 14.204a1 1 0 0 1-1.628.778l-4.723-3.815a1.5 1.5 0 0 1 0-2.334l4.723-3.814A1 1 0 0 1 13 5.797z");
}
</style><path class="szsy4g-3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:caret-left-20-filled"} {...others} />);
}

export default Component;
