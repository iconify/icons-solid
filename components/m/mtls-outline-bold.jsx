import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c9rt-wbve {
  d: path("M2 13a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.fddb2ca0n {
  d: path("M3.5 11a2.5 2.5 0 0 1 5 0");
}

.fkf_gcbra {
  d: path("M10 15h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uk9xnrm3r {
  d: path("M14 13a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.xyp2pm_yf {
  d: path("M15.5 11a2.5 2.5 0 0 1 5 0");
}
</style><g class="s0phu2bbs"><path class="c9rt-wbve"/><path class="fddb2ca0n"/><path class="uk9xnrm3r"/><path class="xyp2pm_yf"/><path class="fkf_gcbra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:mtls-outline-bold"} {...others} />);
}

export default Component;
