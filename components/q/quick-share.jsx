import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h7fuim3pz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.464 14.463l4.527 4.527l-4.527 4.527M2.5 24c0 11.874 9.626 21.5 21.5 21.5c10.15 0 18.656-7.032 20.913-16.49H25.01");
}

.k7r71z2lo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.5 24c0-11.874-9.626-21.5-21.5-21.5c-10.15 0-18.656 7.032-20.913 16.49H22.99");
}

.kdl5xr1nf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.536 33.536l-4.527-4.526l4.527-4.527");
}
</style><path class="k7r71z2lo"/><path class="h7fuim3pz"/><path class="kdl5xr1nf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:quick-share"} {...others} />);
}

export default Component;
