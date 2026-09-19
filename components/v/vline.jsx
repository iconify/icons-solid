import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mlll53bln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m40.97 5.5l-17.918 37h-3.799L11.85 10.203c-.395-1.32-1.402-2.81-4.819-4.703h9.415l8.451 33.192");
}
</style><path class="mlll53bln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:vline"} {...others} />);
}

export default Component;
