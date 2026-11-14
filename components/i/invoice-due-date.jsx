import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qfz86qebg {
  d: path("M15 15.5h6v5.75h-6Zm0 2.25h6m-4.25-3.25V16m2.5-1.5V16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yrdb3cc4t {
  d: path("M12.205 19.978L8.75 18.25l-3.75 2V3h14v8.7m-5.05.55h-1.7v.4M8.5 6.5h7m-7 3h7");
}
</style><g class="ulnmmdpxh"><path class="yrdb3cc4t"/><path class="qfz86qebg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:invoice-due-date"} {...others} />);
}

export default Component;
