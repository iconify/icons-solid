import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.uxc_w6bqs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.066 20.999c12.682 3.01 5.453 14.411-14.055 11.591L37.74 7.464c9.132 7.589 10.384 21.144 2.796 30.276S19.393 48.124 10.26 40.536S-.124 19.393 7.464 10.261a21.5 21.5 0 0 1 24.98-6.033");
}
</style><path class="uxc_w6bqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ireal-pro"} {...others} />);
}

export default Component;
