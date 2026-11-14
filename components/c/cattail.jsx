import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ci322rbkv {
  d: path("M2.5 19.5q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0");
}

.qqvqbjq4d {
  d: path("M7.5 4.5H12v9H7.5Zm2.25-2v2m0 9v5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zlkll_-zh {
  d: path("M9.75 18.5C13 15 15.5 10 15.5 5.5");
}
</style><g class="ulnmmdpxh"><path class="qqvqbjq4d"/><path class="zlkll_-zh"/><path class="ci322rbkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cattail"} {...others} />);
}

export default Component;
