import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pb3nqwbbl {
  d: path("M4.75 5.75h14.5v7.5H4.75ZM6 16v5.5M18 16v5.5");
}

.pkfl3r-oe {
  d: path("M2 3h20v13H2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pkfl3r-oe"/><path class="pb3nqwbbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:digital-noticeboard"} {...others} />);
}

export default Component;
