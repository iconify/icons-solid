import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gqxox2b6h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 7.75V10m0 4v2.25M2.75 12h18.5");
}

.xasbllbbp {
  width: 18.5px;
  height: 11.5px;
  x: 2.75px;
  y: 6.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 4px;
}

.xjtjf2bvb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 12h.01m8.99 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="xasbllbbp"/><path class="gqxox2b6h"/><path class="xjtjf2bvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:braces-teeth"} {...others} />);
}

export default Component;
