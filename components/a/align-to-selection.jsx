import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tu5ponbfp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6V3h3m4 0h4m4 0h3v3m0 4v4m0 4v3h-3m-4 0h-4m-4 0H3v-3m0-4v-4m3.5-3h11v3.5h-11Zm0 6.5h7V17h-7Z");
}
</style><path class="tu5ponbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:align-to-selection"} {...others} />);
}

export default Component;
