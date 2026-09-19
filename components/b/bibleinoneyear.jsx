import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cf0g0ccyl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.81 8.13h-9.069v22.672h9.07c9.669 0 10.168-12.698.913-12.698c5.93 0 5.93-9.552-.914-9.975");
}

.oxx3oeb9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.491 4.5v39L24 36.241L38.509 43.5v-39");
}
</style><path class="oxx3oeb9u"/><path class="cf0g0ccyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bibleinoneyear"} {...others} />);
}

export default Component;
