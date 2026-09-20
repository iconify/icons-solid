import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.wm896b9zg {
  fill: currentColor;
  d: path("M10.242 7.736A6.5 6.5 0 1 1 21.19 14a6.5 6.5 0 1 1-10.948 6.264a6.5 6.5 0 1 1 0-12.527M8 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m18 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0M9 24a1 1 0 1 1-2 0a1 1 0 0 1 2 0");
}
</style><path class="wm896b9zg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:dust-28-filled"} {...others} />);
}

export default Component;
