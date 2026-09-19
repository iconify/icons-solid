import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.br_t-3bcp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.933 6.905L6.95 17.791a3.52 3.52 0 0 0-1.278 3.932l5.723 17.613a3.52 3.52 0 0 0 3.345 2.43h18.52a3.52 3.52 0 0 0 3.345-2.43l5.723-17.613a3.52 3.52 0 0 0-1.278-3.932L26.068 6.905a3.52 3.52 0 0 0-4.135 0");
}

.bzyf0rinb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.775 25.442l6.053 5.97L32.63 19.669");
}
</style><path class="br_t-3bcp"/><path class="bzyf0rinb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:google-accessibility-scanner"} {...others} />);
}

export default Component;
