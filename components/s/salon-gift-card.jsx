import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k_j3bxpvs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5h19v13h-19Zm5.5 0C6.5 3 3 3 3.75 5.75C4.25 7.25 6 7.5 8 7.5Zm0 0C9.5 3 13 3 12.25 5.75C11.75 7.25 10 7.5 8 7.5Zm0 0V13m5 3.5h5");
}
</style><path class="k_j3bxpvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:salon-gift-card"} {...others} />);
}

export default Component;
