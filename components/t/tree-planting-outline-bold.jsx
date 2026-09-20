import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bt921xbxy {
  d: path("M5 21a7 7 0 0 1 14 0");
}

.jr__k4bcu {
  d: path("M12 12c0 -4 3 -6 7 -6 0 4 -3 6 -7 6");
}

.km-udeb-c {
  d: path("M12 17V9");
}

.m9qgpk56l {
  d: path("M12 9c0 -4 -3 -6 -7 -6 0 4 3 6 7 6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="km-udeb-c"/><path class="m9qgpk56l"/><path class="jr__k4bcu"/><path class="bt921xbxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:tree-planting-outline-bold"} {...others} />);
}

export default Component;
