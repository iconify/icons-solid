import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.czvjcpgvr {
  stroke-opacity: 0.4;
  d: path("M10 4L3 4L3 20L10 20");
}

.dnkkgirgp {
  d: path("M20.7586 12L9.1093 12M14.8562 6.204L21 12L14.8562 17.796");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="gp_8x1bzb"><path class="czvjcpgvr"/><path class="dnkkgirgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:log-out-sharp-two-tone"} {...others} />);
}

export default Component;
