import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gcgmgxu7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.222 17.657l3.182-3.182l2.121 2.121l-3.182 3.182Zm4.242-2.121l4.243-4.243m-1.768-1.768l6.011-6.01l3.535 3.535l-6.01 6.011Z");
}
</style><path class="gcgmgxu7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:spatula-lab"} {...others} />);
}

export default Component;
