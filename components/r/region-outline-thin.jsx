import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ae-e09b3w {
  d: path("M3 12h18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lsvp9tyne {
  d: path("M7 16.5h10");
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.qnsgwgb-f {
  d: path("M7 7.5h10");
}
</style><g class="hntgybcog"><path class="o_ssmh9ez"/><path class="qnsgwgb-f"/><path class="ae-e09b3w"/><path class="lsvp9tyne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:region-outline-thin"} {...others} />);
}

export default Component;
