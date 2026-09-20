import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fcybkialk {
  d: path("m5 12 3 -3 3 3Z");
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sxpywdblf {
  d: path("m12 5 3 3 -3 3Z");
}

.tjh8csbtc {
  d: path("m19 12 -3 3 -3 -3Z");
}

.u3f8wv0-j {
  d: path("m12 19 -3 -3 3 -3Z");
}
</style><g class="s0phu2bbs"><path class="o_ssmh9ez"/><path class="bo51iypxr"/><path class="sxpywdblf"/><path class="tjh8csbtc"/><path class="u3f8wv0-j"/><path class="fcybkialk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:cooling-fan-outline-bold"} {...others} />);
}

export default Component;
