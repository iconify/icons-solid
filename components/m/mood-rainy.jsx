import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s9tadpbpe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 14.5A3 3 0 0 1 5.5 9A4 4 0 0 1 12 4.5a4 4 0 0 1 7 3.25a3.5 3.5 0 0 1-1.5 6.75Zm1.5 2.75l-1 3.5m5-3.5l-1 3.5m5-3.5l-1 3.5");
}
</style><path class="s9tadpbpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mood-rainy"} {...others} />);
}

export default Component;
