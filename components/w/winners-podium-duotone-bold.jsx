import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j8ri2qizx {
  d: path("M8 21V6h8v15Z");
}

.o243xubfu {
  d: path("M2 21V11h6");
}

.qqp18hbup {
  d: path("M22 21v-7h-6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x-mi7nbzz {
  fill: currentColor;
  d: path("M8 21V6h8v15Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="x-mi7nbzz"/><path class="j8ri2qizx"/><path class="o243xubfu"/><path class="qqp18hbup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:winners-podium-duotone-bold"} {...others} />);
}

export default Component;
