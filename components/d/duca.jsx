import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gp648yq7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.167 5.5v24.667H42.5V17.833zm0 0H5.5m24.667 3.083H5.5m24.667 3.084H5.5m24.667 3.083H5.5m24.667 3.083H5.5m24.667 12.334H5.5m33.917 3.083H5.5m30.833 3.083H5.5m27.75 3.084H5.5M30.167 42.5H5.5");
}
</style><path class="gp648yq7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:duca"} {...others} />);
}

export default Component;
