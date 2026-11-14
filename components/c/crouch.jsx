import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ryctvebqq {
  d: path("M9 7.5c-3 1-4.5 4-4.5 7H10l-1 6M6.5 9.25l4.75 2.25");
}

.t4fez-bcf {
  d: path("M7.75 5.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vljpbwblw {
  d: path("M2.5 20.5h19v-11a1 1 0 0 0-1-1h-5.25a1 1 0 0 0-1 1v11");
}
</style><g class="ulnmmdpxh"><path class="t4fez-bcf"/><path class="ryctvebqq"/><path class="vljpbwblw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:crouch"} {...others} />);
}

export default Component;
