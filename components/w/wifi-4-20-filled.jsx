import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.wvwr8jupi {
  fill: currentColor;
  d: path("M10.922 13.881a1.242 1.242 0 1 1-1.757 1.757a1.242 1.242 0 0 1 1.757-1.757");
}
</style><path class="wvwr8jupi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:wifi-4-20-filled"} {...others} />);
}

export default Component;
