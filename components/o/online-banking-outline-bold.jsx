import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e4wspy4fl {
  d: path("M15 11.5V17");
}

.jrpnc2pnl {
  d: path("M15 5h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.p889v3ylq {
  d: path("m7.5 11.5 3 -3h3l3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.taxmbub4q {
  d: path("M6 17h12");
}

.wflm7cb-d {
  d: path("M9 11.5V17");
}

.wfnksvb6z {
  d: path("M6 11.5h12");
}
</style><g class="s0phu2bbs"><path class="jrpnc2pnl"/><path class="p889v3ylq"/><path class="wfnksvb6z"/><path class="wflm7cb-d"/><path class="e4wspy4fl"/><path class="taxmbub4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:online-banking-outline-bold"} {...others} />);
}

export default Component;
