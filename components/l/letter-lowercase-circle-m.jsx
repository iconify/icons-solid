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

.ufdq17bxq {
  d: path("M16 22.7a4 4 0 0 1 4-4a4 4 0 0 1 4 4v6.6m-8-10.6v10.6m8-6.6a4 4 0 0 1 4-4a4 4 0 0 1 4 4v6.6");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><defs><path id="SVGk4gO3c9d" class="ufdq17bxq"/></defs><circle class="cpk0fnbgt"/><g class="y9tr6bcfx"><use href="#SVGk4gO3c9d"/><use href="#SVGk4gO3c9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:letter-lowercase-circle-m"} {...others} />);
}

export default Component;
