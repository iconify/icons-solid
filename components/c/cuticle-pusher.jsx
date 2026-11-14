import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k7ewwyb8u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.061 7.404l2.828-2.829l4.95 2.122l-4.243 4.242Zm1.767 1.768l-2.121 2.121m-1.237-1.238l2.475 2.475l-7.779 7.779l-2.475-2.475Z");
}
</style><path class="k7ewwyb8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cuticle-pusher"} {...others} />);
}

export default Component;
