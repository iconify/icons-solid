import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.pzgvwfb7h {
  cx: 24px;
  cy: 27.103px;
  r: 16.397px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.t4-f_k07a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.824 18.787H38.13M23.949 4.5v14.286M13.548 24.77h5.278m8.205 7.377h5.488");
}
</style><circle class="pzgvwfb7h"/><path class="t4-f_k07a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:huawei-calendar"} {...others} />);
}

export default Component;
