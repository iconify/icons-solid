import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tm_fcdbja {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 17c0-1.5 3-2.5 5.5-3l1.75-6h3.5l1.75 6c2.5.5 5.5 1.5 5.5 3s-4 2.5-9 2.5s-9-1-9-2.5Zm6.25-5.5h5.5");
}
</style><path class="tm_fcdbja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:training-cone"} {...others} />);
}

export default Component;
