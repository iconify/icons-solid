import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ezlp2kbjr {
  d: path("M16.5 3v2.5a2 2 0 0 0 2 2H21M8.5 10a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM6 21c0-3.25 2.5-5 5.5-5s5.5 1.75 5.5 5");
}

.s1czsbckr {
  d: path("M5.5 3h11L21 7.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s1czsbckr"/><path class="ezlp2kbjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:avatar-sticker"} {...others} />);
}

export default Component;
