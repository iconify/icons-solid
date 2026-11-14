import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aujcgoije {
  d: path("m12 2.5l-1.5 11l1.5 8");
}

.gqrrg154p {
  d: path("m4 11l6.5 2.5L20 11");
}

.olzbnx0_e {
  d: path("m12 2.5l8 8.5l-8 10.5L4 11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="olzbnx0_e"/><path class="gqrrg154p"/><path class="aujcgoije"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:octahedron"} {...others} />);
}

export default Component;
