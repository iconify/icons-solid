import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jw9i4cc0u {
  width: 13.875px;
  height: 13.875px;
  x: 5.5px;
  y: 28.625px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
  ry: 2px;
}

.pzmzvsbbg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.9 16.6v-3.7h22.2v22.2h-3.7c0-11.1-9.25-18.5-18.5-18.5");
}

.r8fxa6bmd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 23.075V9.5a4 4 0 0 1 4-4h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4H24.925");
}

.t6tnshbin {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.925 42.5c0-14.8-4.625-19.425-19.425-19.425");
}
</style><rect class="jw9i4cc0u"/><path class="r8fxa6bmd"/><path class="pzmzvsbbg"/><path class="t6tnshbin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:privat-terminal"} {...others} />);
}

export default Component;
