import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e65_6jbte {
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.g4flvub6o {
  d: path("M4 6V2.5h6L13.5 6");
}

.ljx4iubuw {
  d: path("M5 18h10");
}

.n9baun0jc {
  d: path("M2 10h20");
}

.oqj-o0b2r {
  d: path("M5 14h14");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="e65_6jbte"/><path class="n9baun0jc"/><path class="g4flvub6o"/><path class="oqj-o0b2r"/><path class="ljx4iubuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:schema-registry-outline-bold"} {...others} />);
}

export default Component;
