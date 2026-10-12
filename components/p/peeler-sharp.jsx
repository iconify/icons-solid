import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d1knrmpub {
  d: path("M7.75 2.75h8.5v5h-8.5zM10 5.25h4M10.25 15h3.5v6.25h-3.5z");
}

.k012gh4pj {
  d: path("M4.75 2.75v5L12 15l7.25-7.25v-5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="k012gh4pj"/><path class="d1knrmpub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:peeler-sharp"} {...others} />);
}

export default Component;
