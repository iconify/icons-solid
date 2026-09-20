import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.nqsjilylp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.703 39.77A18.5 18.5 0 0 1 17.74 25.092L5.5 14.75m9.25 27.75za9.25 9.25 0 0 1 18.5 0m9.25-27.75H19.829l16.114 13.621a18.5 18.5 0 0 1 6.354 11.391");
}
</style><rect class="j3s9ivbxi"/><path class="nqsjilylp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:delimobil"} {...others} />);
}

export default Component;
