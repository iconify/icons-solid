import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l_9a03bmq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.603 4.219l7.794 4.5l-3.5 6.062l-7.794-4.5Zm1.299.75l1.375-2.382l4.33 2.5l-1.375 2.382m1.018 3.281l4.5 1m-.25 2.75h.01m2.74-.75h.01m-2.51 7.75v-2.25m0 0q0-2.25-2.75-2.5q0 2.5 2.75 2.5m0 0q0-2.25 2.75-2.5q0 2.5-2.75 2.5");
}
</style><path class="l_9a03bmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:water-the-plants"} {...others} />);
}

export default Component;
