import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xglq7o_ue {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.62 20.84A3.12 3.12 0 1 1 4.5 24a3.12 3.12 0 0 1 3.12-3.12Zm32.76 0A3.12 3.12 0 1 1 37.26 24a3.12 3.12 0 0 1 3.12-3.12Zm-26.74 3.14h20.72m-6.31-6.3l6.31 6.3m-6.31 6.3l6.31-6.3");
}
</style><path class="xglq7o_ue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:citymapper"} {...others} />);
}

export default Component;
