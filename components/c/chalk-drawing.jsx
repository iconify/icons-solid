import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.djqa3v2su {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.561 3.904l3.535 3.535l-5.657 5.657l-3.535-3.535ZM3 16.5c2-3 3.5 2.5 6-.5c1-1.25 2.5-3.5 3.75-4.5M3 20.5h18");
}
</style><path class="djqa3v2su"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chalk-drawing"} {...others} />);
}

export default Component;
