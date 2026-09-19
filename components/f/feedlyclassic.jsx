import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eypjhq50d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 7.17a1.53 1.53 0 0 0-1.06.44l-18 18a1.48 1.48 0 0 0 0 2.11L18 40.83h12l13.09-13.1a1.48 1.48 0 0 0 0-2.11l-18-18A1.5 1.5 0 0 0 24 7.17M10.5 27.52l12.74-12.67M21 25.09l-6.49 6.44m4.06 4.06l2.5-2.44");
}
</style><path class="eypjhq50d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:feedlyclassic"} {...others} />);
}

export default Component;
