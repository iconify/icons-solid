import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.v6remmhei {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 30.5v7m0-32v19m7.4-3.5v19m0-32v7m7.4 14.5v13m0-32v13m22.2 14v-32l-14.8 5v32z");
}
</style><path class="v6remmhei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:rain-classroom"} {...others} />);
}

export default Component;
