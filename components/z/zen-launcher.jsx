import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a85ua61ho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.133 35.683h18.15M7 5.5h28.683L5.5 35.683h5.035m18.332-23.366h-18.15M41 42.5H12.317L42.5 12.317h-5.035");
}
</style><path class="a85ua61ho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:zen-launcher"} {...others} />);
}

export default Component;
