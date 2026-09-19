import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ojo27qblg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m36.53 28.957l1.847-1.066a4.493 4.493 0 0 0 0-7.782L14.116 6.102a4.493 4.493 0 0 0-6.74 3.89v15.219a4.49 4.49 0 0 0 2.247 3.89l5.54 3.2");
}

.x7q4s0d2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.377 33.741v4.266a4.493 4.493 0 0 0 6.739 3.891l13.18-7.609a4.493 4.493 0 0 0 0-7.782l-12.73-7.35");
}
</style><path class="x7q4s0d2m"/><path class="ojo27qblg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:sportzx"} {...others} />);
}

export default Component;
