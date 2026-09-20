import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d6cu3qpew {
  d: path("M17 3h4v18h-4");
}

.h7bcztycq {
  d: path("M12 8v8");
}

.jlpxneb5g {
  d: path("M9 8v8");
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.pqrd0wbvk {
  d: path("M15 8v8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="jlpxneb5g"/><path class="h7bcztycq"/><path class="pqrd0wbvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:barcode-scan-outline-bold"} {...others} />);
}

export default Component;
