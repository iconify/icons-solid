import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c5tdibbhh {
  fill: currentColor;
  d: path("M3 9.5h13v5H3Z");
}

.fixud3bop {
  d: path("M3 5h18M3 19h12");
}

.s6p3z6bxv {
  d: path("M19 8.5v7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fixud3bop"/><path class="c5tdibbhh"/><path class="s6p3z6bxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:text-select"} {...others} />);
}

export default Component;
