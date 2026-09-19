import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qzfc6-0-u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.064 23.99h6.002m7.848 0h6.002M9.553 4.5h28.894v39H9.553z");
}

.vx3_zx4kd {
  cx: 23.99px;
  cy: 23.99px;
  r: 9.926px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xxqd7jynt {
  cx: 23.99px;
  cy: 23.99px;
  r: 3.924px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="vx3_zx4kd"/><circle class="xxqd7jynt"/><path class="qzfc6-0-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pokemon-tcg-live"} {...others} />);
}

export default Component;
