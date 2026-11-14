import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eo3fuxmnp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 10l3-2l3 2l3-2l3 2v9.5a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2ZM6 2.5l3.25.5l-.5 2.25l-3-.25Zm7.5.5l3.25-.5l.5 3l-3.25.25Zm4.25 6.5L21 9l.5 3.25l-3.25.25Z");
}
</style><path class="eo3fuxmnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:breadcrumbs-pack"} {...others} />);
}

export default Component;
