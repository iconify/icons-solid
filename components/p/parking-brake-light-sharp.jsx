import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.li_sncb5w {
  d: path("M10.25 15.75v-7.5h2.25a2.1 2.1 0 0 1 0 4.25h-2.25m-6-6a12 12 0 0 0 0 11m15.5-11a12 12 0 0 1 0 11");
}

.o_ly6ursf {
  cx: 12px;
  cy: 12px;
  r: 6.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="o_ly6ursf"/><path class="li_sncb5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:parking-brake-light-sharp"} {...others} />);
}

export default Component;
