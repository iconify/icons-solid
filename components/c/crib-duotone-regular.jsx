import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aqrf9ebcv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 8h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h7wibbbny {
  d: path("M3 6v14");
}

.jkuojibnm {
  d: path("M3 20h18");
}

.ler50rfbf {
  d: path("M9 8v12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pga6n1bci {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 20h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ttce8fbyx {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15 8v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tw3-mkbty {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M21 6v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vhnbtvbtn {
  d: path("M3 8h18");
}

.xf7jo6kuf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 6v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xl6k1lbjd {
  d: path("M15 8v12");
}

.y4mdv3b1r {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 8v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y4qjbbcmm {
  d: path("M21 6v14");
}
</style><g class="nrj6p8qat"><path class="aqrf9ebcv"/><path class="pga6n1bci"/><path class="xf7jo6kuf"/><path class="y4mdv3b1r"/><path class="ttce8fbyx"/><path class="tw3-mkbty"/><path class="vhnbtvbtn"/><path class="jkuojibnm"/><path class="h7wibbbny"/><path class="ler50rfbf"/><path class="xl6k1lbjd"/><path class="y4qjbbcmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:crib-duotone-regular"} {...others} />);
}

export default Component;
