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

.f4cnifbvw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.5 18.5l2.75 11l2.75-11l2.75 11l2.75-11m3.744 9.762a3.28 3.28 0 0 0 2.75 1.238h1.65a2.75 2.75 0 1 0 0-5.5h-1.788a2.75 2.75 0 0 1 0-5.5h1.65a2.95 2.95 0 0 1 2.75 1.237M39.5 18.5v8.25a2.75 2.75 0 0 1-5.5 0v-.962");
}
</style><circle class="cpk0fnbgt"/><path class="f4cnifbvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:wsj"} {...others} />);
}

export default Component;
