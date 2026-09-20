import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d1ucjcglv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m7 20 5 -5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.eev_c9mlp {
  d: path("m7 20 5 -5 5 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nykuxsbkv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m7 4 5 5 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p8a7rmkzk {
  d: path("m7 4 5 5 5 -5");
}
</style><g class="nrj6p8qat"><path class="nykuxsbkv"/><path class="d1ucjcglv"/><path class="p8a7rmkzk"/><path class="eev_c9mlp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:chevrons-down-up-duotone-regular"} {...others} />);
}

export default Component;
