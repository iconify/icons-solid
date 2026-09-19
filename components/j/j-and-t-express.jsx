import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kt_ridfzh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m15.829 18.163l-3.147 11.959H4.5m28.442 0l2.848-11.959m-6.572 0H43.5m-16.269 5.695c-5.125 10.25-15.375 3.416-6.264-1.14");
}

.rvno_8b-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.231 30.122l-7.414-9.681q-2.266-3.417 5.706-2.278");
}
</style><path class="kt_ridfzh"/><path class="rvno_8b-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:j-and-t-express"} {...others} />);
}

export default Component;
