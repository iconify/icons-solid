import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vlq3st85j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 4.5a7.5 7.5 0 0 0 0 15a9 9 0 0 1 0-15Zm3 4a5 5 0 0 1 0 7m3.5-10a9 9 0 0 1 0 13");
}
</style><path class="vlq3st85j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sleep-sound"} {...others} />);
}

export default Component;
