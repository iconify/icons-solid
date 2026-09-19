import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.m_6sczj6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.109 37.193L8.891 42.5V10.048l30.218 5.307zM19.943 7.441l19.166 3.366M8.891 5.5l6.686 1.174");
}
</style><path class="m_6sczj6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:lightcut"} {...others} />);
}

export default Component;
