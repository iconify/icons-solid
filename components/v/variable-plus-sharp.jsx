import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u00yt1t7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3.75c-2.9 4.9-2.9 11.6 0 16.5m9-16.5c2.9 4.9 2.9 11.6 0 16.5M9.75 9l4.5 6m0-6l-4.5 6");
}
</style><path class="u00yt1t7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:variable-plus-sharp"} {...others} />);
}

export default Component;
