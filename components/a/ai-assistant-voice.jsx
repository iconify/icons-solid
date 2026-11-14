import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r2olrnpkp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm9.25-4.5a7 7 0 0 1 0 9m-10.5-9a7 7 0 0 0 0 9m13-10.25a9.75 9.75 0 0 1 0 11.5M4.25 6.25a9.75 9.75 0 0 0 0 11.5");
}
</style><path class="r2olrnpkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ai-assistant-voice"} {...others} />);
}

export default Component;
