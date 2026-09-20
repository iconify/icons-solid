import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jd_dotbnq {
  d: path("M6 2h12a2 2 0 0 1 2 2v15l-2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2V4a2 2 0 0 1 2 -2");
}

.mu5ehdgnc {
  d: path("M16 5v9");
}

.owfn5sxxm {
  d: path("M12 8v6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tqn4jcb4f {
  d: path("M8 11v3");
}
</style><g class="s0phu2bbs"><path class="jd_dotbnq"/><path class="tqn4jcb4f"/><path class="owfn5sxxm"/><path class="mu5ehdgnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:log-volume-outline-bold"} {...others} />);
}

export default Component;
