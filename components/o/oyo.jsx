import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c_8welbef {
  cx: 10.971px;
  cy: 24.12px;
  r: 6.677px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.c49ditkmx {
  cx: 36.617px;
  cy: 24.12px;
  r: 6.677px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.g_y5h4onw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.106 17.443l4.688 6.41v6.944m0-6.944l4.688-6.41");
}
</style><path class="g_y5h4onw"/><circle class="c_8welbef"/><circle class="c49ditkmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:oyo"} {...others} />);
}

export default Component;
