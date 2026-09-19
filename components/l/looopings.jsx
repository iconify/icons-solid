import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eoz_i9lrw {
  cx: 24px;
  cy: 24px;
  r: 6.833px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fdbmobc0r {
  cx: 37.667px;
  cy: 24px;
  r: 6.833px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ue4vj2ylz {
  cx: 10.333px;
  cy: 24px;
  r: 6.833px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="ue4vj2ylz"/><circle class="eoz_i9lrw"/><circle class="fdbmobc0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:looopings"} {...others} />);
}

export default Component;
