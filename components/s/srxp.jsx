import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gps1t6biv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 33.08l5.8 9.42H41L29.6 24L24 14.92L18.19 5.5H7L18.4 24");
}

.jzch68swa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 14.92l5.8-9.42H41L29.6 24L24 33.08l-5.81 9.42H7L18.4 24");
}
</style><path class="gps1t6biv"/><path class="jzch68swa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:srxp"} {...others} />);
}

export default Component;
