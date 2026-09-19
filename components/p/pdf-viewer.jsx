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

.wponzw-9c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.904 29.598V18.395h1.867a5.6 5.6 0 0 1 5.602 5.601h0a5.6 5.6 0 0 1-5.602 5.602zm11.013-11.159H37.5m-5.583 5.583h3.641m-3.641-5.583v11.166m-21.417 0V18.402h3.734a3.734 3.734 0 0 1 0 7.469H10.5");
}
</style><path class="wponzw-9c"/><rect class="j3s9ivbxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pdf-viewer"} {...others} />);
}

export default Component;
