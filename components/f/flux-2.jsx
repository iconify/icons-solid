import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.o5vw8-4ru {
  cx: 17.343px;
  cy: 24.701px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 12.843px;
  ry: 12.87px;
}

.x4zkhdclo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.813 21.613h5.712a7.976 7.976 0 0 1 0 15.95H16.354");
}

.xh7_6nb5j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.859 14.068a7.839 7.839 0 0 1 13.449 8.044");
}
</style><ellipse class="o5vw8-4ru"/><path class="xh7_6nb5j"/><path class="x4zkhdclo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:flux-2"} {...others} />);
}

export default Component;
