import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h-2uoubai {
  d: path("M12 12c0 -3.6 2.4 -6 6 -6 0 3.6 -2.4 6 -6 6");
}

.h93exbbfx {
  fill: currentColor;
  d: path("M12 12c0 -3.6 2.4 -6 6 -6 0 3.6 -2.4 6 -6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hlqoyz1hh {
  d: path("M3 20a9 9 0 0 1 18 0");
}

.jkuojibnm {
  d: path("M3 20h18");
}

.l517yxbln {
  d: path("M12 9v6");
}

.n799wlg5y {
  fill: currentColor;
  d: path("M6 12c0 -3.6 2.4 -6 6 -6 0 3.6 -2.4 6 -6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n8qem9biv {
  d: path("M6 12c0 -3.6 2.4 -6 6 -6 0 3.6 -2.4 6 -6 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="n799wlg5y"/><path class="h93exbbfx"/><path class="hlqoyz1hh"/><path class="jkuojibnm"/><path class="l517yxbln"/><path class="n8qem9biv"/><path class="h-2uoubai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:compost-duotone-regular"} {...others} />);
}

export default Component;
