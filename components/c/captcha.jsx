import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ecout6oml {
  d: path("M5.5 9h6v6h-6Z");
}

.hn7tnnbwb {
  d: path("M2.5 5h19v14h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ytjr9nb1j {
  d: path("M6.75 12L8 13.25l2.25-2.5M14 12h4.5");
}
</style><g class="ulnmmdpxh"><path class="hn7tnnbwb"/><path class="ecout6oml"/><path class="ytjr9nb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:captcha"} {...others} />);
}

export default Component;
