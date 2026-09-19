import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.teokchmle {
  width: 27px;
  height: 27px;
  x: 10.5px;
  y: 10.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 3px;
}

.tl-ijmbkx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18 17.859h12v12H18zm19.5 2.001h5m-5 8.18h5M27.865 37.5v5m-7.955-5v5M5.5 28.027h5m-5-8.167h5m9.41-14.348V10.5m7.955-5v5");
}
</style><rect class="teokchmle"/><path class="tl-ijmbkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:phone-performance"} {...others} />);
}

export default Component;
