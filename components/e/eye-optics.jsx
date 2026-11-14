import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l90ngi8rs {
  d: path("M2.5 9C4 5.25 6.6 3 9.75 3S15.5 5.25 17 9c-1.5 3.75-4.1 6-7.25 6S4 12.75 2.5 9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ykvfkxbhc {
  d: path("M6.75 9a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM19 14.5a4 4 0 0 1 0 7a4 4 0 0 1 0-7ZM15.5 18h6");
}
</style><g class="ulnmmdpxh"><path class="l90ngi8rs"/><path class="ykvfkxbhc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:eye-optics"} {...others} />);
}

export default Component;
