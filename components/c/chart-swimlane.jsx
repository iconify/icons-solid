import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r06t41bsu {
  d: path("M2.5 3h19v18h-19Zm0 6h19m-19 6h19");
}

.thsluwbfq {
  fill: currentColor;
  d: path("M4.75 4.75h6v2.5h-6Zm5.75 6h7v2.5h-7Zm4.5 6h4.5v2.5H15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r06t41bsu"/><path class="thsluwbfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chart-swimlane"} {...others} />);
}

export default Component;
