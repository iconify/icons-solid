import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j_478gbzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.725 17.897L12.5 20.5L10 15l-6.5-3.5l17-8l-4.22 8.968M10 15L20.5 3.5m-4 11.75v5.5m3-5.5v5.5");
}
</style><path class="j_478gbzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:remit-compliance-hold"} {...others} />);
}

export default Component;
