import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q22yafb9d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13h7.5v5.5h-7.5zm11 0h7.5v5.5h-7.5zm-5.5-8.5h7.5V10h-7.5zM6.5 13v2.5m11-2.5v2.5M12 4.5V7M2.75 21.25h18.5");
}
</style><path class="q22yafb9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:wholesale-sharp"} {...others} />);
}

export default Component;
