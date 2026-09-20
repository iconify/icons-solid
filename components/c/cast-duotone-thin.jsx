import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gcalxb98a {
  d: path("M8 13h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kburqr_hv {
  d: path("M8 4h8v13h4v4H8Z");
}

.pty_wsbvs {
  d: path("M8 9h8");
}

.q6zj4iekt {
  fill: currentColor;
  d: path("M8 4h8v13h4v4H8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="q6zj4iekt"/><path class="kburqr_hv"/><path class="pty_wsbvs"/><path class="gcalxb98a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:cast-duotone-thin"} {...others} />);
}

export default Component;
