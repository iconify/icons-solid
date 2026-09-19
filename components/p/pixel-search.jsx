import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qtiiljbpv {
  d: path("m28.903 32.01l3.225-3.226l9.755 9.755l-3.226 3.225zm1.483-4.963l-3.222 3.223");
}

.v8rgnlbmc {
  cx: 17.808px;
  cy: 17.804px;
  r: 13.041px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="v8rgnlbmc"/><path class="qtiiljbpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pixel-search"} {...others} />);
}

export default Component;
