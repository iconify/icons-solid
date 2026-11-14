import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.byxhr1bgw {
  d: path("M18.1 12.5H2.5v-10h19v10h-.6");
}

.g37q89b6y {
  d: path("M6.5 9.75L10 6.5l3.5 3.25M2.5 17H11m-8.5 3.5H8m7.25.75v-2L19.5 15l2 2l-4.25 4.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="byxhr1bgw"/><path class="g37q89b6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:caption-edit"} {...others} />);
}

export default Component;
