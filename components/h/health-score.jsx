import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.an80ohgru {
  d: path("M12 15.5S8.25 13.25 8.25 11c0-1.25.75-2 2-2c.75 0 1.25.25 1.75 1c.5-.75 1-1 1.75-1c1.25 0 2 .75 2 2c0 2.25-3.75 4.5-3.75 4.5M3 12h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ogih1_44g {
  d: path("M12 3a9 9 0 1 1-9 9");
}
</style><g class="hntgybcog"><path class="ogih1_44g"/><path class="an80ohgru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:health-score"} {...others} />);
}

export default Component;
