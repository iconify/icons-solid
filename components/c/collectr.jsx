import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cllvzsbgt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35 42.619c-9.035 5.216-20.512 3.193-27.218-4.8c-6.932-8.06-7.163-19.777 0-27.638C14.488 2.188 25.965.165 35.001 5.38");
}

.eukwibb5l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.25 36.123a14 14 0 0 1-17.723-3.125C9.274 27.83 9.4 20.272 13.527 15a14 14 0 0 1 17.724-3.125");
}
</style><path class="cllvzsbgt"/><path class="eukwibb5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:collectr"} {...others} />);
}

export default Component;
