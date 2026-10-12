import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g59u1xbjq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.75 15l4.5-6");
}

.j_h69jb8m {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 12h.01");
}

.kqhyz55pr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.6 11.08l4.05-4.41q.85-.92 2.1-.92H20q1.25 0 1.25 1.25v10q0 1.25-1.25 1.25H9.75q-1.25 0-2.1-.92L3.6 12.92q-.85-.92 0-1.84");
}

.rqqfcuxhu {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12.25 9.5h.01m5.49 5h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="kqhyz55pr"/><path class="j_h69jb8m"/><path class="g59u1xbjq"/><path class="rqqfcuxhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:clearance"} {...others} />);
}

export default Component;
