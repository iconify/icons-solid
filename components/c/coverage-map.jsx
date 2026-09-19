import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.nspz04b7g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.833 8.373L5.5 11.592v28.035l12.333-3.219zm0 0l12.334 3.219v28.035l-12.334-3.219zm24.667 0l-12.333 3.219v28.035L42.5 36.408z");
}
</style><path class="nspz04b7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:coverage-map"} {...others} />);
}

export default Component;
