import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f8wj1yoym {
  d: path("M21 9H7v11");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s1ev1ubdz {
  d: path("m16 4 5 5 -5 5");
}
</style><g class="s0phu2bbs"><path class="s1ev1ubdz"/><path class="f8wj1yoym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:forward-outline-bold"} {...others} />);
}

export default Component;
