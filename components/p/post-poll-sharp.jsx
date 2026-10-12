import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g67wtabwr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 8H14");
}

.lmcw2zq3s {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.75 8l1 1l2-2");
}

.s96vgdble {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 12h5m-5 4H9");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.ywno-sh7h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h18.5v18.5H2.75z");
}
</style><g class="ux2u0rbkq"><path class="ywno-sh7h"/><path class="g67wtabwr"/><path class="lmcw2zq3s"/><path class="s96vgdble"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:post-poll-sharp"} {...others} />);
}

export default Component;
