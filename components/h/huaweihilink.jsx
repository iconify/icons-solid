import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eul-rpbxs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.5 5.69c-5.71 12-14.06 30-17.72 36.62m2.73-36.62c-4.26 9-10 21-14.81 29.73M4.5 22.24l24.16.04m11.58-.02c-4.79 8.18-6.07 11.74-4.48 13c1.92 1.52 4.45.23 7.74-2.53");
}

.nlbs4ac0k {
  cx: 41.84px;
  cy: 18.63px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="eul-rpbxs"/><circle class="nlbs4ac0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:huaweihilink"} {...others} />);
}

export default Component;
