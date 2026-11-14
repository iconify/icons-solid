import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.us5ejifnn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18M3 8h18M3 12h18M3 16h18M3 20h18M5 6.5l3 3m0-3l-3 3m5.5 5l3 3m0-3l-3 3m5.5-7l3 3m0-3l-3 3");
}
</style><path class="us5ejifnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:drum-notation"} {...others} />);
}

export default Component;
