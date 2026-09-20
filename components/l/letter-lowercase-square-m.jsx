import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.adv69lb9y {
  d: path("M16 22.7a4 4 0 0 1 8 0v6.6m-8-10.6v10.6m8-6.6a4 4 0 0 1 8 0v6.6");
}

.j3s9ivbxi {
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

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><defs><path id="SVGvmqPddPE" class="adv69lb9y"/></defs><rect class="j3s9ivbxi"/><g class="y9tr6bcfx"><use href="#SVGvmqPddPE"/><use href="#SVGvmqPddPE"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:letter-lowercase-square-m"} {...others} />);
}

export default Component;
