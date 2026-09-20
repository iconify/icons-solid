import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.m1215f0mu {
  fill: currentColor;
  d: path("M204 208a4 4 0 0 1-4 4h-72a84 84 0 0 1 0-168h72a4 4 0 0 1 0 8h-72a76 76 0 0 0 0 152h72a4 4 0 0 1 4 4");
}
</style><path class="m1215f0mu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:subset-proper-of-thin"} {...others} />);
}

export default Component;
