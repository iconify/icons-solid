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

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yleu63baj {
  d: path("M18.7 16h10.6L18.7 32h10.6");
}
</style><defs><path id="SVGB2Pznbnf" class="yleu63baj"/></defs><circle class="cpk0fnbgt"/><g class="y9tr6bcfx"><use href="#SVGB2Pznbnf"/><use href="#SVGB2Pznbnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:letter-uppercase-circle-z"} {...others} />);
}

export default Component;
