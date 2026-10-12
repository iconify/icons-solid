import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oklhcj1xd {
  d: path("M9.25 6.5v7.75A2 2 0 0 1 8 16.1M12.75 6v11M6.5 11l10.75-2.25m-4.5 5.75l4.5-.94");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="oklhcj1xd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:currency-riyal"} {...others} />);
}

export default Component;
