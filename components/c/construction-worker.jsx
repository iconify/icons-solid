import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kmh_f-bah {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 8.5a5 5 0 0 1 10 0m-12 0h14m-10.5 0V10a3.5 3.5 0 0 0 7 0V8.5M4 21.5c0-3.25 3.5-5.25 8-5.25s8 2 8 5.25M9 16.75v4.75m6-4.75v4.75");
}
</style><path class="kmh_f-bah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:construction-worker"} {...others} />);
}

export default Component;
