import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.avis6_bfg {
  d: path("M5.25 12h1.5v1.5h-1.5Zm4 0h1.5v1.5h-1.5Zm4 0h1.5v1.5h-1.5Zm4 0h1.5v1.5h-1.5Z");
}

.b5nepebom {
  d: path("M2.5 7h19v10h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b5nepebom"/><path class="avis6_bfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:network-hub"} {...others} />);
}

export default Component;
