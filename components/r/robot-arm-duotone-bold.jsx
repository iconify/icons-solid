import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b6ubinbne {
  d: path("m6 12 6 -6h8v3.5");
}

.f5touvbja {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m6 12 6 -6h8v3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gzh4n16ws {
  d: path("M6 12v8");
}

.hlxudebgl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M17 6v3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o46_3ibvz {
  d: path("M3 20h6");
}

.pbd66000m {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 20h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s2gl1vbxy {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 12v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ti0atfbnf {
  d: path("M17 6v3.5");
}
</style><g class="s0phu2bbs"><path class="pbd66000m"/><path class="s2gl1vbxy"/><path class="f5touvbja"/><path class="hlxudebgl"/><path class="o46_3ibvz"/><path class="gzh4n16ws"/><path class="b6ubinbne"/><path class="ti0atfbnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:robot-arm-duotone-bold"} {...others} />);
}

export default Component;
