import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ah3u7bbsh {
  fill: currentColor;
  d: path("M10.59 12.59a2 2 0 0 0 2.83 2.83l5.66-8.49z");
}

.y501adbkd {
  fill: currentColor;
  d: path("M19.46 10a1 1 0 0 0-.07 1a7.6 7.6 0 0 1 .52 1.81a8 8 0 0 1-.69 4.73a1 1 0 0 1-.89.53H5.68a1 1 0 0 1-.89-.54A8 8 0 0 1 13 6.06a7.7 7.7 0 0 1 2.11.56a1 1 0 0 0 1-.07a1 1 0 0 0-.17-1.76A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1a10 10 0 0 0 .55-8.89a1 1 0 0 0-1.75-.11");
}
</style><path class="y501adbkd"/><path class="ah3u7bbsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-speed"} {...others} />);
}

export default Component;
