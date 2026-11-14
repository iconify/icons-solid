import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k04vrob6s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-2-3.5a5 5 0 0 0 0 7m7-7a5 5 0 0 1 0 7M5.75 5.75a8.75 8.75 0 0 0 0 12.5m12.5-12.5a8.75 8.75 0 0 1 0 12.5");
}
</style><path class="k04vrob6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:radio-waves-broadcast"} {...others} />);
}

export default Component;
