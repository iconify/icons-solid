import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xf2rhbixa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.748 24l-13.496-7.793v15.586z");
}

.y6h_27bqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.366 5.5h16.768c10.21 0 18.5 8.29 18.5 18.5h0c0 10.21-8.29 18.5-18.5 18.5H6.366z");
}
</style><path class="y6h_27bqd"/><path class="xf2rhbixa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dmm"} {...others} />);
}

export default Component;
