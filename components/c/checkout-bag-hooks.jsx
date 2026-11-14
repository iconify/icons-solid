import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aa4mcj76t {
  d: path("M2.5 4h19M4 4v4.5a1.75 1.75 0 0 0 3.5 0v-1M11 4v4.5a1.75 1.75 0 0 0 3.5 0v-1M18 4v4.5a1.75 1.75 0 0 0 3.5 0v-1");
}

.kftlajbcn {
  d: path("m5.75 10.25l-2 7.25a2 2 0 0 0 4 0Zm7 0l-2 7.25a2 2 0 0 0 4 0Zm7 0l-2 7.25a2 2 0 0 0 4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aa4mcj76t"/><path class="kftlajbcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:checkout-bag-hooks"} {...others} />);
}

export default Component;
