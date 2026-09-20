import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.aopd2tfez {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.13 4.5v36.901a2.099 2.099 0 1 0 4.198 0V25.49h5.056zm-11.217 0v10.924M23.21 4.5v11.736a4.2 4.2 0 0 1-4.198 4.198v20.967a2.099 2.099 0 1 1-4.198 0V20.434a4.2 4.2 0 0 1-4.198-4.198V4.5");
}
</style><path class="aopd2tfez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:aeg-kitchen"} {...others} />);
}

export default Component;
