import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jms1xqp8l {
  d: path("M9 3h6");
}

.nqda50bqs {
  d: path("M4 13a8 8 0 1 0 16 0 8 8 0 1 0 -16 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wsg9rhonx {
  d: path("M12 8v5h4");
}

.zkgvk4bog {
  d: path("M12 2v3");
}
</style><g class="s0phu2bbs"><path class="nqda50bqs"/><path class="wsg9rhonx"/><path class="jms1xqp8l"/><path class="zkgvk4bog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:study-timer-outline-bold"} {...others} />);
}

export default Component;
