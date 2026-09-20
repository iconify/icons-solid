import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a5uqb5btg {
  d: path("M9 14v4");
}

.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.i4l6z3b8k {
  d: path("M15 13v5");
}

.l1jjkky7x {
  d: path("M8 18h8");
}

.r-3ib9fxz {
  d: path("M12 11v7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="abnm6smsv"/><path class="a5uqb5btg"/><path class="r-3ib9fxz"/><path class="i4l6z3b8k"/><path class="l1jjkky7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:report-outline-bold"} {...others} />);
}

export default Component;
