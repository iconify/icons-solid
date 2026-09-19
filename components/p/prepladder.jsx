import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ac7l9cc7y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.5 4.5h-10m10 5.571h-10m10 5.572h-10m10 5.571h-10m10 5.572h-10m29-16.715h-10m10 5.572h-10m10 5.571h-10m5 5.572h-10m-4 5.571h-10m10 5.572h-10m10 5.571h-10m24-39h-10");
}
</style><path class="ac7l9cc7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:prepladder"} {...others} />);
}

export default Component;
