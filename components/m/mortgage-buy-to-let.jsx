import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a78ngrrzs {
  d: path("M15.25 15.75h6v4.5h-6Z");
}

.c-ihe_b5u {
  d: path("M16 7V4h2v4.75M14 21.5V14h7.5m-5.25 0v1.75M20 14v1.75");
}

.s22jxnbbc {
  d: path("M11.16 20.5H4v-10l8-7l8 7v.74");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s22jxnbbc"/><path class="c-ihe_b5u"/><path class="a78ngrrzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mortgage-buy-to-let"} {...others} />);
}

export default Component;
