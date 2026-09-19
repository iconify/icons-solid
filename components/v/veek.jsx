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

.qjb-7-3tm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.78 20.526l-5.344 14.162l-5.344-14.162m15.379-7.214v21.376m.002-4.541l9.676-9.628m-6.596 6.564l7.606 7.573m-12.28-21.344h3.184m-3.184 21.344h3.184m7.253 0H38.5m-4.467-14.137h3.184m-27.717 0h3.184m7.504 0h3.184");
}
</style><rect class="j3s9ivbxi"/><path class="qjb-7-3tm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:veek"} {...others} />);
}

export default Component;
