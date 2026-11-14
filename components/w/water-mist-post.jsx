import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n94bt7qqb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 20.5h11m-7.5 0v-12m4 12v-12m-6-4h8v4H8Zm-3.5-1h.01m-1.01 3h.01m.99 3h.01m14.99-6h.01m.99 3h.01m-1.01 3h.01");
}
</style><path class="n94bt7qqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:water-mist-post"} {...others} />);
}

export default Component;
