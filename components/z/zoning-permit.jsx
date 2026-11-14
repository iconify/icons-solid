import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dcw09dptt {
  fill: currentColor;
  d: path("M14.5 14.5H18V18h-3.5ZM18 18h3.5v3.5H18Z");
}

.m_nn46xea {
  d: path("M11.7 21.5H4.5v-19h15v9.2M8 7h8m-8 3.5h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zebfqmb5m {
  d: path("M14.5 14.5h7v7h-7Zm3.5 0v7M14.5 18h7");
}
</style><g class="ulnmmdpxh"><path class="m_nn46xea"/><path class="zebfqmb5m"/><path class="dcw09dptt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:zoning-permit"} {...others} />);
}

export default Component;
