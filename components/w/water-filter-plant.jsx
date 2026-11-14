import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j2ev04bpp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h18V5l-6.5 6v2.5h-5V11L3 5ZM6.5 8h11M12 16.5s-2.5 2-2.5 3a2.5 2.5 0 0 0 5 0c0-1-2.5-3-2.5-3Z");
}
</style><path class="j2ev04bpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:water-filter-plant"} {...others} />);
}

export default Component;
