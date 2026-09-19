import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dpu-8jbdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 17.439l-3.8-5V5.5h-3.176v6.94c0 3.486 2.31 11.542 2.31 11.542L12.458 42.5h23.084l-6.876-18.518s2.31-8.056 2.31-11.542V5.5H27.8v6.94zm-4.666 6.543h9.332");
}
</style><path class="dpu-8jbdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-dress"} {...others} />);
}

export default Component;
