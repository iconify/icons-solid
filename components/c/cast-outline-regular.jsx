import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gcalxb98a {
  d: path("M8 13h8");
}

.kburqr_hv {
  d: path("M8 4h8v13h4v4H8Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pty_wsbvs {
  d: path("M8 9h8");
}
</style><g class="nrj6p8qat"><path class="kburqr_hv"/><path class="pty_wsbvs"/><path class="gcalxb98a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:cast-outline-regular"} {...others} />);
}

export default Component;
