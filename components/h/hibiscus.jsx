import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbyb52b2u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 10.25a3 3 0 1 1 4 0A3 3 0 1 1 14.25 14A3 3 0 1 1 11 16.5A3 3 0 1 1 7.75 14A3 3 0 1 1 9 10.25ZM11 13l8-8m0 0h.01");
}
</style><path class="dbyb52b2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hibiscus"} {...others} />);
}

export default Component;
