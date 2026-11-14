import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n6h92p9_o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v7.5h-19ZM9 3v7.5M15 3v7.5m3 3.75c.25 2.5 1.25 3.5 3.75 3.75c-2.5.25-3.5 1.25-3.75 3.75c-.25-2.5-1.25-3.5-3.75-3.75c2.5-.25 3.5-1.25 3.75-3.75Z");
}
</style><path class="n6h92p9_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:data-enrich"} {...others} />);
}

export default Component;
