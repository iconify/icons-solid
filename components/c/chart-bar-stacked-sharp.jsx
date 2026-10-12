import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uqi3u4b8f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 14.75h3.5v5.5h-3.5zm0-6.5h3.5v3.5h-3.5zm6.5 2.5h3.5v9.5h-3.5zm0-7h3.5v4h-3.5zm6.5 12.5h3.5v4h-3.5zm0-7h3.5v4h-3.5z");
}
</style><path class="uqi3u4b8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:chart-bar-stacked-sharp"} {...others} />);
}

export default Component;
