import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aotnjcbls {
  d: path("M4 13h7");
}

.byrw8520t {
  fill: currentColor;
  d: path("M2 9a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gmngh8b8n {
  d: path("m18 5 3.5 3.5a3.5 3.5 0 1 1 -7 0Z");
}

.h4kqfjbnm {
  d: path("M2 9a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.hc4jj6btd {
  fill: currentColor;
  d: path("m18 5 3.5 3.5a3.5 3.5 0 1 1 -7 0Z");
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
</style><g class="s0phu2bbs"><path class="byrw8520t"/><path class="hc4jj6btd"/><path class="h4kqfjbnm"/><path class="aotnjcbls"/><path class="gmngh8b8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:blood-sugar-duotone-bold"} {...others} />);
}

export default Component;
