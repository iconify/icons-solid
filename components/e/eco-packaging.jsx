import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nu4e13b7a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.1 20.5H4v-11h14v3.1M4 9.5l-1.5-5h6l1.5 5Zm14 0l1.5-5h-6l-1.5 5Zm-3 12c0-5 2.5-6.5 6.5-6.5c0 4.5-2.5 6.5-6.5 6.5Zm0 0l3.25-3.25");
}
</style><path class="nu4e13b7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:eco-packaging"} {...others} />);
}

export default Component;
