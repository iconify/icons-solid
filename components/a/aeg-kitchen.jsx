import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.tgpzsc9yf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.13 4.5v36.901c0 1.16.94 2.099 2.1 2.099h0a2.1 2.1 0 0 0 2.098-2.099V25.489h5.056zm-11.217 0v10.924M23.21 4.5v11.736a4.2 4.2 0 0 1-4.198 4.198v20.967c0 1.16-.94 2.099-2.099 2.099h0a2.1 2.1 0 0 1-2.099-2.099V20.434a4.2 4.2 0 0 1-4.198-4.198V4.5");
}
</style><path class="tgpzsc9yf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:aeg-kitchen"} {...others} />);
}

export default Component;
