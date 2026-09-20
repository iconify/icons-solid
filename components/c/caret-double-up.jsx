import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.f5eklw4pn {
  fill: currentColor;
  d: path("M213.66 194.34a8 8 0 0 1-11.32 11.32L128 131.31l-74.34 74.35a8 8 0 0 1-11.32-11.32l80-80a8 8 0 0 1 11.32 0Zm-160-68.68L128 51.31l74.34 74.35a8 8 0 0 0 11.32-11.32l-80-80a8 8 0 0 0-11.32 0l-80 80a8 8 0 0 0 11.32 11.32");
}
</style><path class="f5eklw4pn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-double-up"} {...others} />);
}

export default Component;
