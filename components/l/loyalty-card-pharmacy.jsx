import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hn7tnnbwb {
  d: path("M2.5 5h19v14h-19Z");
}

.kdie1cfby {
  d: path("m12 7.75l1 3h3.25l-2.5 2l1 3.25L12 14.25L9.25 16l1-3.25l-2.5-2H11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hn7tnnbwb"/><path class="kdie1cfby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:loyalty-card-pharmacy"} {...others} />);
}

export default Component;
