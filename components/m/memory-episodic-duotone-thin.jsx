import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.be1u5t58a {
  d: path("M6 8h14");
}

.gms_xv68n {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h3qfj6bgc {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 8h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h50arts9k {
  d: path("M6 12h10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kvzrrkb_u {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 16h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ojg4edcfp {
  d: path("M6 16h14");
}

.r3faxubne {
  d: path("M4 4v16");
}

.z2xx1pboh {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 12h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="gms_xv68n"/><path class="h3qfj6bgc"/><path class="z2xx1pboh"/><path class="kvzrrkb_u"/><path class="r3faxubne"/><path class="be1u5t58a"/><path class="h50arts9k"/><path class="ojg4edcfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:memory-episodic-duotone-thin"} {...others} />);
}

export default Component;
