import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uwivq1yig {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5Z");
}

.y3becndqb {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M7.5 13l1.75-1.5m1.25-1L12 9.25m0 0l1.5 1.25m1.25 1L16.5 13M8 14.5V16m0 1.5v1h1.5m1.5 0h2m1.5 0H16v-1m0-1.5v-1.5");
}
</style><g class="ulnmmdpxh"><path class="uwivq1yig"/><path class="y3becndqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:off-plan-property"} {...others} />);
}

export default Component;
