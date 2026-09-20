import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e0fatccfd {
  d: path("M18 12h4");
}

.jlpxneb5g {
  d: path("M9 8v8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wg8_ddc1f {
  d: path("M6 12h6");
}

.wn519caci {
  d: path("m19 9 3 3 -3 3");
}

.x7aiqk4zc {
  d: path("M2 12a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
}
</style><g class="nrj6p8qat"><path class="x7aiqk4zc"/><path class="jlpxneb5g"/><path class="wg8_ddc1f"/><path class="e0fatccfd"/><path class="wn519caci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:spend-outline-regular"} {...others} />);
}

export default Component;
