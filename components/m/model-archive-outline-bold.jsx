import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o3xv3zb-q {
  d: path("M3 15v6h18v-6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ulgy3xb-n {
  d: path("m12 3 5 5 -5 5 -5 -5Z");
}
</style><g class="s0phu2bbs"><path class="ulgy3xb-n"/><path class="o3xv3zb-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:model-archive-outline-bold"} {...others} />);
}

export default Component;
