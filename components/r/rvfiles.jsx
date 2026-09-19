import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cdb-qbcza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 10.397a3.265 3.265 0 0 1 3.265-3.265h9.487c.907 0 1.792.284 2.53.811l5.348 3.82c.738.527 1.622.81 2.53.81h10.575a3.265 3.265 0 0 1 3.265 3.265v21.765a3.265 3.265 0 0 1-3.265 3.265H8.765A3.265 3.265 0 0 1 5.5 37.603z");
}

.seyba3bif {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 21.28a3.265 3.265 0 0 0-3.265-3.265H8.765A3.265 3.265 0 0 0 5.5 21.279");
}
</style><path class="cdb-qbcza"/><path class="seyba3bif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:rvfiles"} {...others} />);
}

export default Component;
