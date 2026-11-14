import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ten78rush {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h5v5h-5Zm7.75 0h5v5h-5ZM2.5 10.25h5v5h-5Zm9.65 5h-1.9v-5h5v1.9M18 15v6m-3-3h6");
}
</style><path class="ten78rush"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:layout-grid-add"} {...others} />);
}

export default Component;
