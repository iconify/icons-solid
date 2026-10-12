import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h1_xbzy0z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 9.25v-3h1.5v-3.5h3v3.5h1.5v3Zm-2.5 3h11v9h-11zM19 11.5c1.5 1.85 2.25 3.15 2.25 4.25a2.25 2.25 0 0 1-4.5 0c0-1.1.75-2.4 2.25-4.25Z");
}
</style><path class="h1_xbzy0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:essential-oil-sharp"} {...others} />);
}

export default Component;
