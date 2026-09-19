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

.l0r0xsb4k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.5 21.813h4.375v4.375H6.5zm4.375 0h4.375v4.375h-4.375zm4.375 0h4.375v4.375H15.25zm4.375 0H24v4.375h-4.375zm4.375 0h4.375v4.375H24zm4.375 0h4.375v4.375h-4.375zm4.375 0h4.375v4.375H32.75zm4.375 0H41.5v4.375h-4.375z");
}
</style><path class="l0r0xsb4k"/><circle class="cpk0fnbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:hypocam"} {...others} />);
}

export default Component;
