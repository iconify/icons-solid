import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g6ulkabjn {
  d: path("M2.5 2.5h19v19h-19Z");
}

.ksez664jp {
  d: path("M3.75 21.5V15L5 13.25L6.25 15v6.5m2.25 0V15l1.25-1.75L11 15v6.5m2 0V15l1.25-1.75L15.5 15v6.5m2.25 0V15L19 13.25L20.25 15v6.5M2.5 18h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="ksez664jp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fenced-lot"} {...others} />);
}

export default Component;
