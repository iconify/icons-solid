import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jssbprbjj {
  d: path("M10.75 9a4.25 4.25 0 1 1 0 8.5a4.25 4.25 0 1 1 0-8.5m0 4.25l8-8m-2-2.5v3.5h3.5");
}

.v_x_uzbjj {
  cx: 10.75px;
  cy: 13.25px;
  r: 8px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="v_x_uzbjj"/><path class="jssbprbjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:accuracy-target-sharp"} {...others} />);
}

export default Component;
