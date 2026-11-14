import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v32gvpbrh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 14.5V5A2.25 2.25 0 0 1 9 5v9.5a3.5 3.5 0 1 1-4.5 0Zm2.25-.5v3.5m10-10v9m-4-6.75l8 4.5m-8 0l8-4.5");
}
</style><path class="v32gvpbrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:feels-like-cold"} {...others} />);
}

export default Component;
