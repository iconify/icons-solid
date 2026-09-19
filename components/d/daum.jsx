import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.re-rqeb_o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.838 42.5H6.662v-37h16.176c10.217 0 18.5 8.283 18.5 18.5s-8.283 18.5-18.5 18.5");
}

.xy15grbgw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.85 13.594c5.747 0 10.406 4.659 10.406 10.406s-4.66 10.406-10.407 10.406h-8.093V13.594z");
}
</style><path class="xy15grbgw"/><path class="re-rqeb_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:daum"} {...others} />);
}

export default Component;
