import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.pdwy3zblx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.5 12.509l-14.25 8.227m6.334 4.352l7.916-4.57V4.5l-19 10.97v2.002l19 13.056v2.002l-19 10.97V27.484l7.916-4.57m6.334 4.35L14.5 35.491");
}
</style><path class="pdwy3zblx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:skiddle"} {...others} />);
}

export default Component;
