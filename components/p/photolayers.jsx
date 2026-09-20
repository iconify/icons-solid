import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gj98cvwje {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.459 15.692l4.395-7.6L42.5 16.534L31.169 36.13l-6.628-3.82");
}

.nw4dzfb8z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.831 11.871l14.647 8.442l-11.332 19.595L5.5 31.466z");
}
</style><path class="gj98cvwje"/><path class="nw4dzfb8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:photolayers"} {...others} />);
}

export default Component;
