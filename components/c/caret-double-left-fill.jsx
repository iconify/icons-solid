import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.estx28box {
  fill: currentColor;
  d: path("M208 48v160a8 8 0 0 1-13.66 5.66L128 147.31V208a8 8 0 0 1-13.66 5.66l-80-80a8 8 0 0 1 0-11.32l80-80A8 8 0 0 1 128 48v60.69l66.34-66.35A8 8 0 0 1 208 48");
}
</style><path class="estx28box"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-double-left-fill"} {...others} />);
}

export default Component;
