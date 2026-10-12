import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.apcx_k43t {
  width: 18.5px;
  height: 14.5px;
  x: 2.75px;
  y: 5.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.b90vbpbke {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.9 13h.01");
}

.d74424b-z {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 9.75h4.5");
}

.rzxbh8s_v {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.75 10.25h4.5v5.5h-4.5a2.75 2.75 0 0 1 0-5.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="apcx_k43t"/><path class="rzxbh8s_v"/><path class="b90vbpbke"/><path class="d74424b-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:wallet-search"} {...others} />);
}

export default Component;
