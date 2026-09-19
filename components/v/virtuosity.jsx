import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a9dpfl4fn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.38 4.5s4.36 7.5 4.36 10.05s-5.08 5.36-5.08 8.07c0 3 8.34 12.87 8.34 12.87s-10-6.63-10 .61a8.78 8.78 0 0 0 3.76 7.4");
}
</style><path class="a9dpfl4fn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:virtuosity"} {...others} />);
}

export default Component;
