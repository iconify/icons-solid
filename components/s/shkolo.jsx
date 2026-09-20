import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.d7ki8g-qd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 35H38a5.5 5.5 0 0 0 5.5-5.5A5.5 5.5 0 0 0 38 24H10a5.5 5.5 0 0 1-5.5-5.5A5.5 5.5 0 0 1 10 13h32.5");
}
</style><path class="d7ki8g-qd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:shkolo"} {...others} />);
}

export default Component;
