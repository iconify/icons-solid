import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xtxm1hb9j {
  d: path("M2.75 20.25v-17H6V11h3V6h3.25v5h9v10.25H2.75z");
}

.ytr5yacpv {
  d: path("m17 13.25l-2.25 3.25h3l-2 3");
}
</style><g class="x2cwu0gfd"><path class="xtxm1hb9j"/><path class="ytr5yacpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:power-plant-sharp"} {...others} />);
}

export default Component;
