import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pu9x-otnp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12.5h10v9h-10Zm2-3h6v3h-6Zm1.5 0h3l3-4.25L11.5 4Zm8.25-6.25l4-1.25M16 6h5m-5.75 2.75l4 1.25");
}
</style><path class="pu9x-otnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:nasal-spray"} {...others} />);
}

export default Component;
