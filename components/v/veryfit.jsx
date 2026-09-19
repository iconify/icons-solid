import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.g1exsibbv {
  cx: 40.5px;
  cy: 22.466px;
  r: 0.75px;
  fill: currentColor;
}

.uj8mev2_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 9.5H27l-13.243 29L4.5 22.466h10.579m6 0H33.5");
}
</style><path class="uj8mev2_w"/><circle class="g1exsibbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:veryfit"} {...others} />);
}

export default Component;
