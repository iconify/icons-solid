import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pef22s7qw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m17.657 4.222l2.121 2.121l-3.889 3.889l-2.121-2.121Zm-2.829 4.95l-1.767 1.767M9.702 7.581l6.717 6.717l-11.137 4.42Z");
}
</style><path class="pef22s7qw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:archaeology-trowel"} {...others} />);
}

export default Component;
