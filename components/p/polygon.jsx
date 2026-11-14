import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pb13r0blv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.004 3.786l8.03 1.53a1.75 1.75 0 0 1 1.311 1.105l2.259 6.024a1.75 1.75 0 0 1-.401 1.852l-5.329 5.329a1.75 1.75 0 0 1-1.99.343l-7.987-3.804a1.75 1.75 0 0 1-.908-2.133l3.027-9.08a1.75 1.75 0 0 1 1.988-1.166");
}
</style><path class="pb13r0blv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:polygon"} {...others} />);
}

export default Component;
