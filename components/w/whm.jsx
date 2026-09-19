import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.pt3rbpbhz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.25 37.351V26.67L24 21.33l-9.25 5.34v10.681L24 42.692z");
}

.rl53icbth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 21.33V10.649l-9.25-5.341l-9.25 5.341V21.33l9.25 5.34zm18.5 0V10.649l-9.25-5.341L24 10.649V21.33l9.25 5.34z");
}
</style><path class="rl53icbth"/><path class="pt3rbpbhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:whm"} {...others} />);
}

export default Component;
