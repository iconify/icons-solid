import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.abtetbcpu {
  d: path("M9 10.5v3");
}

.l517yxbln {
  d: path("M12 9v6");
}

.mcqe8sbtu {
  d: path("M15 10.5v3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="abnm6smsv"/><path class="abtetbcpu"/><path class="l517yxbln"/><path class="mcqe8sbtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:document-audio-outline-bold"} {...others} />);
}

export default Component;
