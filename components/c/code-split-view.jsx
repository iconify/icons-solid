import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h0okt56_g {
  d: path("m8.75 8.5l-3 3.5l3 3.5m6.5-7l3 3.5l-3 3.5");
}

.iiwnuubed {
  d: path("M2.5 4h19v16h-19ZM12 4v16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iiwnuubed"/><path class="h0okt56_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:code-split-view"} {...others} />);
}

export default Component;
