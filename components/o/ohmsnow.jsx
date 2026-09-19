import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.zgkxo_eys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 29l5.5 8.36h10.14C13.57 24.54 14.68 10.62 24 10.64s10.3 13.88 3.88 26.72H38L43.5 29");
}
</style><path class="zgkxo_eys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ohmsnow"} {...others} />);
}

export default Component;
