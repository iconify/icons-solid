import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a8gycbctz {
  width: 11px;
  height: 11px;
  x: 31.5px;
  y: 31.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.cumubrhsg {
  width: 11px;
  height: 11px;
  x: 18.5px;
  y: 18.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.e1gs15blm {
  width: 11px;
  height: 11px;
  x: 5.5px;
  y: 31.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.efg9bub5e {
  width: 11px;
  height: 11px;
  x: 31.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.mtrc__noh {
  width: 11px;
  height: 11px;
  x: 18.5px;
  y: 31.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.r3e22eb8e {
  width: 11px;
  height: 11px;
  x: 31.5px;
  y: 18.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="e1gs15blm"/><rect class="a8gycbctz"/><rect class="mtrc__noh"/><rect class="r3e22eb8e"/><rect class="cumubrhsg"/><rect class="efg9bub5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:banks-ru"} {...others} />);
}

export default Component;
