import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dyhczfbhc {
  d: path("M14 17q1.75-1.5 3.5 0t3.5 0m-7 3.5q1.75-1.5 3.5 0t3.5 0");
}

.j8w1l_c7o {
  d: path("M11.2 21.5H4.5v-19h15v12.1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j8w1l_c7o"/><path class="dyhczfbhc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pond-liner"} {...others} />);
}

export default Component;
