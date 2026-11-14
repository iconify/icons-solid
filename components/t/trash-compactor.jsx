import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b4hu1abqx {
  d: path("M15.25 18.25L18 21l2.75-2.75");
}

.jfqjlnb_c {
  d: path("M14.3 21.25H3.5V9.75h15v1.9M5.5 7h11M11 2.5V7m7 7.5V21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jfqjlnb_c"/><path class="b4hu1abqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:trash-compactor"} {...others} />);
}

export default Component;
