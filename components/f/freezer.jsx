import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.b17rqyumr {
  width: 28.19px;
  height: 36.58px;
  x: 9.91px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
}

.hlqkn15pv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.91 19.69h28.18m-22.62-3.84V9.79m0 19.37V23.1m-2.83 17.98v1.05A1.37 1.37 0 0 0 14 43.5h2.47a1.37 1.37 0 0 0 1.37-1.37v-1.05m12.31 0v1.05a1.37 1.37 0 0 0 1.37 1.37H34a1.37 1.37 0 0 0 1.37-1.37v-1.05");
}
</style><rect class="b17rqyumr"/><path class="hlqkn15pv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:freezer"} {...others} />);
}

export default Component;
