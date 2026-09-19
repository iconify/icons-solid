import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.o7q7bbb1c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.265 18.382L43.5 29.618m-11.235 0L43.5 18.382m-16.198-5.617v22.47");
}

.vr_j8bbnl {
  cx: 13.325px;
  cy: 23.894px;
  r: 8.825px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="vr_j8bbnl"/><path class="o7q7bbb1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:olx"} {...others} />);
}

export default Component;
