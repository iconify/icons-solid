import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zfa4robyi {
  fill: currentColor;
  d: path("M43.76 76.24a6 6 0 0 1 8.48-8.48L128 143.51l75.76-75.75a6 6 0 0 1 8.48 8.48l-80 80a6 6 0 0 1-8.48 0ZM208 186H48a6 6 0 0 0 0 12h160a6 6 0 0 0 0-12");
}
</style><path class="zfa4robyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-line-down-light"} {...others} />);
}

export default Component;
