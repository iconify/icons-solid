import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ruhkdvb_h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13V5h19v8h-3v-3a1.5 1.5 0 0 0-3 0v3h-2v-3a1.5 1.5 0 0 0-3 0v3h-2v-3a1.5 1.5 0 0 0-3 0v3Zm0 4.5q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="ruhkdvb_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:tidal-barrage"} {...others} />);
}

export default Component;
