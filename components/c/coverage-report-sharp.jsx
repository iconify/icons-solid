import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aoos6bb8w {
  d: path("M14 10V2.75A7.25 7.25 0 0 1 21.25 10Zm-6.75 6.75L9 18.5l3.5-3.5");
}

.gi6z1437d {
  d: path("M11 13h8.25A8.25 8.25 0 1 1 11 4.75Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="gi6z1437d"/><path class="aoos6bb8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:coverage-report-sharp"} {...others} />);
}

export default Component;
