import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xye4ag6lj {
  d: path("M8.5 5.5L12 8l3.5-2.5M6 17.5h8");
}

.zgqzskgiz {
  d: path("M6 2.5h12V11H6ZM2.5 14h19v7h-19Z");
}
</style><g class="ulnmmdpxh"><path class="zgqzskgiz"/><path class="xye4ag6lj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:newsletter-signup"} {...others} />);
}

export default Component;
