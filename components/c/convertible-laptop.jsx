import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g3notubwt {
  width: 12px;
  height: 8px;
  x: 4px;
  y: 5px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ob4bwuylg {
  d: path("M3 17h18M19 5.54a4 4 0 0 1 0 6.92m2.24.2l-2.24-.2l.2-2.24");
}
</style><g class="hntgybcog"><rect class="g3notubwt"/><path class="ob4bwuylg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:convertible-laptop"} {...others} />);
}

export default Component;
