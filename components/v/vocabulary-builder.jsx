import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.f8i38xf_e {
  width: 34.789px;
  height: 7.053px;
  x: 6.605px;
  y: 35.447px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.395px;
  ry: 2.395px;
}

.j8-k2_lgg {
  cx: 24px;
  cy: 18.737px;
  r: 13.237px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.tpwdo92fb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.816 35.447V42.5");
}

.wcc5habbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m15.467 18.737l6.18 6.18l10.886-10.886");
}
</style><rect class="f8i38xf_e"/><path class="tpwdo92fb"/><circle class="j8-k2_lgg"/><path class="wcc5habbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:vocabulary-builder"} {...others} />);
}

export default Component;
