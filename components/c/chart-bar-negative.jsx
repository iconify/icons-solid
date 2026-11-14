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

.zpfgxsktr {
  fill: currentColor;
  d: path("M4 5h1.75v7H4Zm5 7h1.75v6H9Zm5-9h1.75v9H14Zm5 9h1.75v8H19Z");
}
</style><g class="ulnmmdpxh"><path class="c6bmv3q-h"/><path class="zpfgxsktr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chart-bar-negative"} {...others} />);
}

export default Component;
