import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kc9-v-u-y {
  cx: 10.25px;
  cy: 10.25px;
  r: 6.75px;
}

.qh8fg0oaf {
  d: path("m15.25 15.25l6 6M7.75 13v-2m2.5 2V7.5m2.5 5.5V9.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="kc9-v-u-y"/><path class="qh8fg0oaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:market-analysis-sharp"} {...others} />);
}

export default Component;
