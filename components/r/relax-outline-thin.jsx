import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k11irslia {
  d: path("M12 16c4 0 7 -3 7 -6 -4 0 -7 3 -7 6");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.qb7w1fbvo {
  d: path("M12 6c3 3 3 7 0 10 -3 -3 -3 -7 0 -10");
}

.yxqt_ilaa {
  d: path("M12 16c-4 0 -7 -3 -7 -6 4 0 7 3 7 6");
}
</style><g class="hntgybcog"><path class="qb7w1fbvo"/><path class="yxqt_ilaa"/><path class="k11irslia"/><path class="oifr9zbpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:relax-outline-thin"} {...others} />);
}

export default Component;
