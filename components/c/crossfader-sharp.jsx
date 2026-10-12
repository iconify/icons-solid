import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fsic8wbmy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12H6.5m9 0h5.75M5.5 5.5V8m13-2.5V8m-13 8v2.5m13-2.5v2.5M8.25 7.75h5.5v8.5h-5.5zM11 10v4");
}
</style><path class="fsic8wbmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:crossfader-sharp"} {...others} />);
}

export default Component;
