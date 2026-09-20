import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b58isb55w {
  d: path("M12 6v7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vrecxx6kh {
  d: path("M9 6h6");
}

.xzm42kydi {
  d: path("M8 13h8v4l-4 4 -4 -4Z");
}
</style><g class="s0phu2bbs"><path class="xzm42kydi"/><path class="b58isb55w"/><path class="vrecxx6kh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:spade-outline-bold"} {...others} />);
}

export default Component;
