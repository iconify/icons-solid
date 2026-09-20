import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.anc63nb1b {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m8 7 -4 4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.aoorvnbzq {
  d: path("m14 7 4 4 -4 4");
}

.brrel9b3d {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9 19 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e-eh9i0mi {
  d: path("m9 19 2 2 4 -4");
}

.lrkxnckco {
  d: path("m8 7 -4 4 4 4");
}

.lz2qrz52i {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m14 7 4 4 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="anc63nb1b"/><path class="lz2qrz52i"/><path class="brrel9b3d"/><path class="lrkxnckco"/><path class="aoorvnbzq"/><path class="e-eh9i0mi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:code-review-duotone-bold"} {...others} />);
}

export default Component;
