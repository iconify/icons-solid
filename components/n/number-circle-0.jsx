import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.d8cmf6beh {
  width: 10.6px;
  height: 16px;
  x: 18.7px;
  y: 16px;
  rx: 5.3px;
  ry: 5.3px;
}

.g-2mhzyzm {
  d: path("m28.046 17.884l-8.104 12.232");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><defs><path id="SVG0yuq5EEg" class="g-2mhzyzm"/></defs><circle class="cpk0fnbgt"/><g class="y9tr6bcfx"><use href="#SVG0yuq5EEg"/><rect class="d8cmf6beh"/><use href="#SVG0yuq5EEg"/><rect class="d8cmf6beh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:number-circle-0"} {...others} />);
}

export default Component;
