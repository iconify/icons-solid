import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.eiajye8_d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.778 14.005a3.292 3.292 0 0 1-6.303-.067");
}

.fh8vs7bjs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.222 14.005a3.292 3.292 0 0 0 6.303-.067");
}

.juw2z7bfl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38 16.462c-2.38 2.427-6.673 5.6-14 5.6s-11.62-3.173-14-5.6");
}
</style><circle class="cpk0fnbgt"/><path class="fh8vs7bjs"/><path class="juw2z7bfl"/><path class="eiajye8_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:headspace"} {...others} />);
}

export default Component;
