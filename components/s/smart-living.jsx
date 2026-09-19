import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.s2yetn1-v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.02 26.218l-3.325 2.747V43.5l5.414-4.54h8.986V15.244L24 4.5L7.905 15.244V38.96h10.97");
}
</style><path class="s2yetn1-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:smart-living"} {...others} />);
}

export default Component;
