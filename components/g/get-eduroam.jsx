import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dv3f3f-ja {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.277 38.951a7.428 7.428 0 1 1-12.41-8.165");
}

.sip3msb4n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 34.869a7.428 7.428 0 1 0-14.856 0zm-25.758 2.956c-1.475-10.627 5.224-22.85 20.485-21.376");
}

.ue-vqvvgs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.798 37.825C3.441 20.572 15.154 3.902 37.227 5.773");
}
</style><path class="dv3f3f-ja"/><path class="sip3msb4n"/><path class="ue-vqvvgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:get-eduroam"} {...others} />);
}

export default Component;
