import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.aai9r2bef {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.165 34.978h9.67");
}

.j0u7yes7a {
  cx: 14.774px;
  cy: 25.022px;
  r: 4.726px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.l0jn0tb2i {
  cx: 33.226px;
  cy: 25.022px;
  r: 4.726px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.tokv0dc8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.202 12.593v-.919a2.16 2.16 0 0 0-2.16-2.16H9.958a2.16 2.16 0 0 0-2.16 2.16v.919m33.542 0H6.66a2.16 2.16 0 0 0-2.16 2.16v21.573a2.16 2.16 0 0 0 2.16 2.16h9.432c3.584 0 3.483-9.868 7.908-9.868s4.324 9.868 7.908 9.868h9.432a2.16 2.16 0 0 0 2.16-2.16V14.753a2.16 2.16 0 0 0-2.16-2.16");
}
</style><path class="tokv0dc8g"/><circle class="j0u7yes7a"/><circle class="l0jn0tb2i"/><path class="aai9r2bef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:google-cardboard"} {...others} />);
}

export default Component;
