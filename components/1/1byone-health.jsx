import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.msrycbc9n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.545 22.46c4.753-.988 13.572-2.962 20.91-3.114");
}

.poey6b6jp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.242 12.5c-1.613 4.509-7.971 23-7.971 23m16.917-22.628c-2.36 8.804-7.396 22.288-7.396 22.288");
}
</style><circle class="cpk0fnbgt"/><path class="poey6b6jp"/><path class="msrycbc9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:1byone-health"} {...others} />);
}

export default Component;
