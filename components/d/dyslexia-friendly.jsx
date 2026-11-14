import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sas30ab3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.5v14m0-3a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm15-11v14m-6-3a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><path class="sas30ab3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dyslexia-friendly"} {...others} />);
}

export default Component;
