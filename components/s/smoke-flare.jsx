import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tbi2n09cu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.475 10.697l2.828 2.828l-7.778 7.778l-2.828-2.828ZM8.25 12.75l3 3m2-6.5C12 7 15.5 5.5 14.5 2.5m2 8.75c1-2.25 4-1.25 5-4.75");
}
</style><path class="tbi2n09cu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:smoke-flare"} {...others} />);
}

export default Component;
