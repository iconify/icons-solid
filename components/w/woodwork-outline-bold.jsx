import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ezh2fvb-c {
  d: path("M6 17c3 -3 7 -3 10 0");
}

.f82c7tb8u {
  d: path("M4 6v5h10V6Z");
}

.ic_pehd5a {
  d: path("M3 17h18");
}

.qf1y30bjf {
  d: path("M14 8.5h5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="f82c7tb8u"/><path class="qf1y30bjf"/><path class="ic_pehd5a"/><path class="ezh2fvb-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:woodwork-outline-bold"} {...others} />);
}

export default Component;
