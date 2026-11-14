import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mj-bw5btm {
  d: path("M11.7 19H2.5V2.5h14v8.9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z920z3b0r {
  d: path("m8 8l-2.5 2.5L8 13m2.75-5l.99.99m-.021 3.041L10.75 13m3.75.5l7 4.25l-7 4.25Z");
}
</style><g class="ulnmmdpxh"><path class="mj-bw5btm"/><path class="z920z3b0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:code-playground"} {...others} />);
}

export default Component;
