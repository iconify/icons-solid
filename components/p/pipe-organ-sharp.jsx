import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.juekcjs7z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 10H9v8l-.51.55l-1.98 2.15l-.51.55l-.51-.55l-1.98-2.15L3 18v-8zm12-3.5H21V18l-.51.55l-1.98 2.15l-.51.55l-.51-.55l-1.98-2.15L15 18V6.5zm-6-3.75H15V18l-.51.55l-1.98 2.15l-.51.55l-.51-.55l-1.98-2.15L9 18V2.75zm-5 12.75h2.5m3.5 0h2.5m3.5 0h2.5");
}
</style><path class="juekcjs7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pipe-organ-sharp"} {...others} />);
}

export default Component;
