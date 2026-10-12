import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.itxcm0bbl {
  d: path("M2.75 2.75h18.5v18.5H2.75z");
}

.pg1bq3n8f {
  d: path("M6.75 17.5v-11h3.5a3 3 0 0 1 0 6h-3.5M17 8l-1.75 3.5h2.5L16 15");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="itxcm0bbl"/><path class="pg1bq3n8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ev-parking-sharp"} {...others} />);
}

export default Component;
