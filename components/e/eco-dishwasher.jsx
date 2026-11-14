import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l-m0pyb9j {
  d: path("M7 13.75a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm8 7.75c0-5 2-7 6.5-7c0 4.5-2 7-6.5 7Zm0 0l3.5-3.5");
}

.rvrkq1hgi {
  d: path("M11.1 21.5H4v-19h16v9.3M4 7h16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rvrkq1hgi"/><path class="l-m0pyb9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:eco-dishwasher"} {...others} />);
}

export default Component;
