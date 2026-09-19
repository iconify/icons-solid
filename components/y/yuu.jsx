import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.r288kpngy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.5 19.09c.238 1.211 11.346 22.229 11.698-4.962c.062 16.39-4.812 22.372-7.689 24.167m11.445-21.869c1.675 10.736 9.828 11.919 9.561-3.13m3.46-1.227c.183 5.473 6.23 11.5 6.525-2.364");
}
</style><path class="r288kpngy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:yuu"} {...others} />);
}

export default Component;
