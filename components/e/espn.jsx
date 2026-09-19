import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.n0y_2pmko {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.044 5.825L8.746 16.283l32.456-.072L42.5 5.825zM8.421 19.78L5.5 42.176h32.456l.974-9.736H18.807l.65-4.22h20.122l1.298-8.438z");
}
</style><path class="n0y_2pmko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:espn"} {...others} />);
}

export default Component;
