import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fa-097bgw {
  d: path("m4.5 7.5l1.25 14h12.5l1.25-14m-16 0h17v-1a2 2 0 0 0-2-2h-13a2 2 0 0 0-2 2Zm6.5-3v-2h4v2");
}

.j5svyfb-j {
  d: path("M7.75 11h8.5v1.5c-1.5.5-2.25 2.25-2.25 5h-4c0-2.75-.75-4.5-2.25-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fa-097bgw"/><path class="j5svyfb-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:diaper-pail"} {...others} />);
}

export default Component;
