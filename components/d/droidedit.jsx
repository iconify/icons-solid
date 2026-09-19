import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j-7eunnpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11 14.939h26M11 19.13h11.305m3.39 0H37m-26 4.192h5.746m3.203 0H37m0 4.192h-5.746m-3.203 0H11m17.333 6.389v5.547m-8.666-5.547v5.547");
}

.mnidknbrb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.895 39.45h20.21");
}

.yoi8qrx9e {
  width: 39px;
  height: 25.354px;
  x: 4.5px;
  y: 8.55px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}
</style><path class="mnidknbrb"/><rect class="yoi8qrx9e"/><path class="j-7eunnpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:droidedit"} {...others} />);
}

export default Component;
