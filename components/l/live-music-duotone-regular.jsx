import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.acr8x6wbq {
  d: path("M15 9c2 2 2 6 0 8");
}

.jrneb7jzh {
  d: path("M18 6c3 3.5 3 10.5 0 14");
}

.ksmcor87h {
  fill: currentColor;
  d: path("M6 17a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mp2qg-3hm {
  d: path("M12 17V5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pe4oq0b5e {
  d: path("M6 17a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="nrj6p8qat"><path class="ksmcor87h"/><path class="pe4oq0b5e"/><path class="mp2qg-3hm"/><path class="acr8x6wbq"/><path class="jrneb7jzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:live-music-duotone-regular"} {...others} />);
}

export default Component;
