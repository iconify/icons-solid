import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dznv025mt {
  d: path("M6 14h12");
}

.o72p0hsyz {
  d: path("M14 4h4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v9il_wb-q {
  d: path("M6 10h12");
}

.w_jkatblo {
  d: path("M12 7v10");
}
</style><g class="s0phu2bbs"><path class="o72p0hsyz"/><path class="v9il_wb-q"/><path class="dznv025mt"/><path class="w_jkatblo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:table-extract-ai-outline-bold"} {...others} />);
}

export default Component;
