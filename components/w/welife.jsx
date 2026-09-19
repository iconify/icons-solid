import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hs-fmi5tv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.62 42.5V17.28L24.175 5.5L42.38 17.28V42.5l-15.62-8.02c-1.953-1.001-3.432-.982-5.366 0z");
}
</style><path class="hs-fmi5tv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:welife"} {...others} />);
}

export default Component;
