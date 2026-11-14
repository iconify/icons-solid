import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x1038qcyk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9.5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4.5m-14 5V19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4.5M3 12h3m4.5 0h3m4.5 0h3");
}
</style><path class="x1038qcyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:text-page-break"} {...others} />);
}

export default Component;
