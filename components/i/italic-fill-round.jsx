import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tjhp8_bzp {
  fill: currentColor;
  d: path("M10 20H8a1 1 0 0 1 0-2h1.246l3.428-12H12a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2h-1.246l-3.428 12H12a1 1 0 0 1 0 2Z");
}
</style><path class="tjhp8_bzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:italic-fill-round"} {...others} />);
}

export default Component;
