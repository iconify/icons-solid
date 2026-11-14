import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g_8mvfbrg {
  d: path("m4.75 12l1.5 1.75L9 10m6.5-2l3.5 3.5M19 8l-3.5 3.5");
}

.oc0yahg7a {
  d: path("M2.5 3.5H11v17H2.5Zm10.5 0h8.5v17H13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oc0yahg7a"/><path class="g_8mvfbrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:quiz-true-false"} {...others} />);
}

export default Component;
