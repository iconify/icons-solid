import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bx3fv3b8c {
  d: path("M12 13v4");
}

.njnz25bwe {
  d: path("M8 8a4 5 0 1 1 8 0 4 5 0 1 1 -8 0");
}

.oquq7bbql {
  d: path("M20 17v4");
}

.pmuiqo95v {
  d: path("M2 17h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vdy_x0b6n {
  d: path("M4 17v4");
}
</style><g class="s0phu2bbs"><path class="njnz25bwe"/><path class="bx3fv3b8c"/><path class="pmuiqo95v"/><path class="vdy_x0b6n"/><path class="oquq7bbql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:dressing-table-outline-bold"} {...others} />);
}

export default Component;
