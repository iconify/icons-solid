import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i-c6dccrj {
  d: path("M17 12h4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uzcz9mbhg {
  fill: currentColor;
  d: path("M2.5 17h12l-6-10Z");
}
</style><g class="ulnmmdpxh"><path class="uzcz9mbhg"/><path class="i-c6dccrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:metric-delta-up"} {...others} />);
}

export default Component;
