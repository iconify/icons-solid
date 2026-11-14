import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.na12gss2b {
  d: path("M16 7V4h2v4.75M14.5 15l2.75 3l-2.75 3m3.5-6l2.75 3L18 21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.znaulxbba {
  d: path("M11.16 20.5H4v-10l8-7l8 7v2.54");
}
</style><g class="ulnmmdpxh"><path class="znaulxbba"/><path class="na12gss2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mortgage-overpay"} {...others} />);
}

export default Component;
