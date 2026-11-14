import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c6bmv3q-h {
  d: path("M2.5 12h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v02g4sb6i {
  fill: currentColor;
  d: path("M3 5h2v5H3Zm3.5 0h2v5h-2Zm3.5 9h2v5h-2Zm3.5-9h2v5h-2Zm3.5 9h2v5h-2Zm3 0h1.75v5H20Z");
}
</style><g class="ulnmmdpxh"><path class="c6bmv3q-h"/><path class="v02g4sb6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chart-win-loss"} {...others} />);
}

export default Component;
