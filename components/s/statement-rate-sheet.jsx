import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.podmv7j6w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v18h-19Zm11 0v18M2.5 9h19m-19 6h19m-16-9h5m-5 6h5m-5 6h5M16 7.25l3-2.5M16.25 5h.01m2.49 2h.01M16 12h3m-3 6h3");
}
</style><path class="podmv7j6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:statement-rate-sheet"} {...others} />);
}

export default Component;
