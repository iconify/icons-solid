import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g-wxd1xvy {
  d: path("M12 5v2.5");
}

.ii89d7bog {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 5v2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jv6rgubka {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 10h8l7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.loqr5yt1s {
  d: path("M4 10h8l7 7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="jv6rgubka"/><path class="ii89d7bog"/><path class="loqr5yt1s"/><path class="g-wxd1xvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:changepoint-duotone-bold"} {...others} />);
}

export default Component;
