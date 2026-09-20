import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gb7yzvvzz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 3v18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.j_zru2c3c {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m5 18 7 -7h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}

.qwspi75zm {
  d: path("m5 18 7 -7h7");
}
</style><g class="nrj6p8qat"><path class="gb7yzvvzz"/><path class="j_zru2c3c"/><path class="qe97cg-lx"/><path class="qwspi75zm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:warmup-duotone-regular"} {...others} />);
}

export default Component;
