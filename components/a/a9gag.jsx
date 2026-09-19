import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lq2omjlsq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.93 14.25L24 24L7.07 14.25");
}

.uuw5qpber {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.07 14.25L24 4.5l16.93 9.75v19.5L24 43.5L7.07 33.75");
}
</style><path class="lq2omjlsq"/><path class="uuw5qpber"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:a9gag"} {...others} />);
}

export default Component;
