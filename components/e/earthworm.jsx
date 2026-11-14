import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.svciqqb_y {
  d: path("M2.5 19.5H3q5-6 10 0h8.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x9s1xtqjs {
  d: path("M6.5 16.75V11a4.5 4.5 0 0 1 9 0v1a1.5 1.5 0 0 0 3 0V6.5a1.5 1.5 0 0 1 3 0V12a4.5 4.5 0 0 1-9 0v-1a1.5 1.5 0 0 0-3 0v5.75");
}
</style><g class="ulnmmdpxh"><path class="x9s1xtqjs"/><path class="svciqqb_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:earthworm"} {...others} />);
}

export default Component;
