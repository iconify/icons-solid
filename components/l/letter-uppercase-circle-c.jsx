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

.gzxlochsv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.3 26.635v.065A5.3 5.3 0 0 1 24 32h0a5.3 5.3 0 0 1-5.3-5.3v-5.4A5.3 5.3 0 0 1 24 16h0a5.3 5.3 0 0 1 5.3 5.3v.065");
}
</style><circle class="cpk0fnbgt"/><path class="gzxlochsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:letter-uppercase-circle-c"} {...others} />);
}

export default Component;
