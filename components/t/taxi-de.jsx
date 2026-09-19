import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.chza5_bcj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.037 37.964L5.5 42.5m37-37l-4.311 4.311");
}

.joi22b4wa {
  cx: 30.017px;
  cy: 24.161px;
  r: 3.732px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.y3ond4ags {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.253 24.16c0-7.924-6.424-14.349-14.35-14.349s-14.35 6.425-14.35 14.35c0 9.78 14.35 17.631 14.35 17.631s14.35-7.85 14.35-17.631");
}
</style><path class="y3ond4ags"/><circle class="joi22b4wa"/><path class="chza5_bcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:taxi-de"} {...others} />);
}

export default Component;
