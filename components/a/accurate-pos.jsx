import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fnzp_gbyw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 24C5.5 13.783 13.783 5.5 24 5.5S42.5 13.783 42.5 24S34.217 42.5 24 42.5V30.167A6.167 6.167 0 1 0 17.833 24v6.167c0 6.812-5.522 12.333-12.333 12.333z");
}
</style><path class="fnzp_gbyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:accurate-pos"} {...others} />);
}

export default Component;
