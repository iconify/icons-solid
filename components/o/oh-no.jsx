import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.byngv_uhh {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M22.5 14A8.5 8.5 0 1 1 14 5.5a8.5 8.5 0 0 1 8.5 8.5Zm20 0A8.5 8.5 0 1 1 34 5.5a8.5 8.5 0 0 1 8.5 8.5Zm0 20a8.5 8.5 0 1 1-8.5-8.5a8.5 8.5 0 0 1 8.5 8.5Z");
}
</style><path class="byngv_uhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:oh-no"} {...others} />);
}

export default Component;
