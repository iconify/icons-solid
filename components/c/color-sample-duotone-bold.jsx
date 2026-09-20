import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fg8libqda {
  d: path("M4 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hecisrt9f {
  d: path("m9 14 4 -4 3 3 -4 4Z");
}

.jz0b4rbqp {
  fill: currentColor;
  d: path("M4 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qdh3cdbsp {
  fill: currentColor;
  d: path("m9 14 4 -4 3 3 -4 4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tu9hygbmi {
  d: path("m13 4 6 6");
}
</style><g class="s0phu2bbs"><path class="qdh3cdbsp"/><path class="jz0b4rbqp"/><path class="tu9hygbmi"/><path class="hecisrt9f"/><path class="fg8libqda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:color-sample-duotone-bold"} {...others} />);
}

export default Component;
