import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o-6u5obej {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5h4A3.5 3.5 0 0 1 14 6v12a3.5 3.5 0 0 1-3.5 3.5h-4A3.5 3.5 0 0 1 3 18V6a3.5 3.5 0 0 1 3.5-3.5M3 9h11M6 4.75v2m0 4.75v3m11.5-1v-8a1.5 1.5 0 0 1 3 0v8a2.75 2.75 0 1 1-3 0");
}
</style><path class="o-6u5obej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fridge-temperature-check"} {...others} />);
}

export default Component;
