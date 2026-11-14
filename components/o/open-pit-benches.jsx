import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zycuo-boq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5L3 8.5h1.75l.5 3.5H7l.5 3.5h1.75l.5 3.5h4.5l.5-3.5h1.75L17 12h1.75l.5-3.5H21l.5-3.5");
}
</style><path class="zycuo-boq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:open-pit-benches"} {...others} />);
}

export default Component;
