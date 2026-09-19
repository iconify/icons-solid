import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.l12z-rjcq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 17.833h12.333v12.333H5.5zm24.667 0H42.5v12.333H30.167zM17.833 30.167h12.333V42.5H17.833zm9.334 0l-9.334-9.334V5.5h12.334v24.667z");
}
</style><path class="l12z-rjcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ahs-parking"} {...others} />);
}

export default Component;
