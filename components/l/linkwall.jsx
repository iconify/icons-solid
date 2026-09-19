import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jhhox5y9b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.972 23.565l6.309 6.309l11.748-11.748");
}

.p-p4pbbyd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 43.47c1.69 0 15.25-7.77 15.25-16.94V12.444L24 4.53L8.75 12.444V26.53c0 9.17 13.56 16.94 15.25 16.94");
}
</style><path class="p-p4pbbyd"/><path class="jhhox5y9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:linkwall"} {...others} />);
}

export default Component;
