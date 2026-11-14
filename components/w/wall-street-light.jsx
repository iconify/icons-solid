import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kerhdgnpz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v19M3 6h10v2.5m-10 2L7.5 6m3 2.5h5l-1 5h-3Zm2.5 8V19m-3.25-3L8.5 18m7.75-2l1.25 2");
}
</style><path class="kerhdgnpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:wall-street-light"} {...others} />);
}

export default Component;
