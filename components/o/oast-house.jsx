import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gucylbbzs {
  d: path("m5 12.5l5.75-7.25h2.5L19 12.5Zm5.75-7.25V2.5H13L15 4m-8 8.5v9h10v-9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vkdgtnbat {
  d: path("M10.75 21.5V18h2.5v3.5");
}
</style><g class="ulnmmdpxh"><path class="gucylbbzs"/><path class="vkdgtnbat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:oast-house"} {...others} />);
}

export default Component;
