import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.hr6wkp7wg {
  d: path("M12 9.5V16");
}

.lhg9en3sp {
  d: path("M15 13v3");
}

.mfc7nxp-y {
  d: path("M9 7h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wh3w9jgzq {
  d: path("M9 11.5V16");
}
</style><g class="s0phu2bbs"><path class="abnm6smsv"/><path class="mfc7nxp-y"/><path class="wh3w9jgzq"/><path class="hr6wkp7wg"/><path class="lhg9en3sp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:rate-headers-outline-bold"} {...others} />);
}

export default Component;
