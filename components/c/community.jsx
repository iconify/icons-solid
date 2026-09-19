import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.akl6ftbtv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.402 30.896h4m-4-6.9l2-1.1m0 0v8M7.032 5.876h33.936a1.52 1.52 0 0 1 1.516 1.521v24.79a1.52 1.52 0 0 1-1.516 1.521H5.516V7.398a1.52 1.52 0 0 1 1.516-1.522m9.028 27.847v8.4L5.516 33.709");
}
</style><path class="akl6ftbtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:community"} {...others} />);
}

export default Component;
