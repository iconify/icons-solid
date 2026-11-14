import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r9fnzfbvl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v19m0-13h6.5M3 15h6.5M3 21.5h6.5M21 2.5v19m0-13h-6.5M21 15h-6.5m6.5 6.5h-6.5m-9-9.75h3.25V15H5.5Zm9.75 6.5h3.25v3.25h-3.25Z");
}
</style><path class="r9fnzfbvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:aisle-warehouse"} {...others} />);
}

export default Component;
