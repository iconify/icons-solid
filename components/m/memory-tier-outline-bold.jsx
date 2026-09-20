import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.q7h9nybxu {
  d: path("M16 9v3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sfjortb-o {
  d: path("M12 7v5");
}

.v_bddgbtn {
  d: path("M8 5v7");
}
</style><g class="s0phu2bbs"><path class="n0n63pb2v"/><path class="v_bddgbtn"/><path class="sfjortb-o"/><path class="q7h9nybxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:memory-tier-outline-bold"} {...others} />);
}

export default Component;
