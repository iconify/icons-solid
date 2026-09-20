import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ayfng4o1h {
  d: path("M5 6v10");
}

.pg4kk0y8v {
  d: path("M13 6v7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.se8tg3byo {
  d: path("M5 6a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.sy7mvubrh {
  d: path("M9 13h8v6H9Z");
}
</style><g class="s0phu2bbs"><path class="se8tg3byo"/><path class="ayfng4o1h"/><path class="pg4kk0y8v"/><path class="sy7mvubrh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:pulley-outline-bold"} {...others} />);
}

export default Component;
