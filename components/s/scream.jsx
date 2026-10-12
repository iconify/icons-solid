import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o86863f9l {
  cx: 12px;
  cy: 10px;
  r: 6px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pmrceg31p {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 8h.01m4.99 0h.01");
}

.u8882ghvv {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9.75a1.25 1.75 0 0 1 0 3.5a1.25 1.75 0 0 1 0-3.5m-4.87 7.47a2 3-20 1 1-3.76 1.36a2 3-20 1 1 3.76-1.36m9.74 0a2 3 20 1 0 3.76 1.36a2 3 20 1 0-3.76-1.36M3.34 15.96L3 15.02m2.46.17l-.34-.94m15.54 1.71l.34-.94m-2.46.17l.34-.94");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="o86863f9l"/><path class="pmrceg31p"/><path class="u8882ghvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:scream"} {...others} />);
}

export default Component;
