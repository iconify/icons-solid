import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gve0_3b1h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.506 35.259a2.628 2.628 0 0 1 0-5.256H38.49m-23.983 5.256H38.49");
}

.hw0akwbgk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.84 20.314h9.272m-24.225 0h9.27");
}

.kpeoj8bgb {
  cx: 36.112px;
  cy: 13.92px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.387px;
  ry: 6.395px;
}

.q-1roqbam {
  cx: 11.887px;
  cy: 13.92px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.387px;
  ry: 6.395px;
}

.rot2rdm4b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.008 40.474a7.842 7.842 0 0 1 0-15.684h27.816M14.008 40.475h27.816");
}
</style><path class="rot2rdm4b"/><path class="gve0_3b1h"/><ellipse class="q-1roqbam"/><ellipse class="kpeoj8bgb"/><path class="hw0akwbgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fidibo"} {...others} />);
}

export default Component;
