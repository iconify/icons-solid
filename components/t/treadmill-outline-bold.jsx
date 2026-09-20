import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h67al40ex {
  d: path("M2 19h13v-4H2Z");
}

.ned58dbax {
  d: path("M16 8h6V4h-6Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wre--v3de {
  d: path("M15 17h4V8");
}
</style><g class="s0phu2bbs"><path class="h67al40ex"/><path class="wre--v3de"/><path class="ned58dbax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:treadmill-outline-bold"} {...others} />);
}

export default Component;
