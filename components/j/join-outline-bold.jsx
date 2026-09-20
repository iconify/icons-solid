import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l517yxbln {
  d: path("M12 9v6");
}

.r1giuh9in {
  d: path("M10 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x5-v1c34k {
  d: path("M2 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}
</style><g class="s0phu2bbs"><path class="x5-v1c34k"/><path class="r1giuh9in"/><path class="l517yxbln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:join-outline-bold"} {...others} />);
}

export default Component;
