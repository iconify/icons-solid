import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dp_v0obrq {
  d: path("M8 3v3");
}

.fb8er8b7t {
  d: path("M14 9a2.5 2.5 0 0 1 0 5");
}

.o8od38cnm {
  d: path("M4 18h16");
}

.rnz95vbcp {
  d: path("M6 8v7h8V8Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yazo7scbq {
  d: path("M12 3v3");
}
</style><g class="s0phu2bbs"><path class="rnz95vbcp"/><path class="fb8er8b7t"/><path class="o8od38cnm"/><path class="dp_v0obrq"/><path class="yazo7scbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:breakfast-included-outline-bold"} {...others} />);
}

export default Component;
