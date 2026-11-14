import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ievhbkuco {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.101 18.718l4.949-4.95l3.182 3.182l-4.95 4.949Zm5.48-4.42l4.596-4.596l2.121 2.121l-4.596 4.596Zm5.656-3.535l7.072-7.072m-4.773 3.006l1.767 1.767");
}
</style><path class="ievhbkuco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:telescopic-rod"} {...others} />);
}

export default Component;
