import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qzhakfw9y {
  d: path("M13.25 5A4.25 4.25 0 0 0 5 6.75v9.75m5.5 0H5a1 1 0 0 0-1 1V19a1 1 0 0 0 1 1h4.5m4-15v4m2.75-4v4m-8.5-6.25v4");
}

.sf8ib0b_n {
  d: path("M10.5 18v-4.5L8.25 11a1.75 1.75 0 0 1 2-2l.25.25V9A4.25 4.25 0 0 1 19 9v9m-9.5 0H20v3.5H9.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sf8ib0b_n"/><path class="qzhakfw9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:garden-gloves"} {...others} />);
}

export default Component;
