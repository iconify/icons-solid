import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hhhynebos {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.267 17.192L11 16l-4.702 2.472l.898-5.236l-3.804-3.708l5.257-.764L11 4l2.351 4.764l5.257.764l-2.56 2.496M15.5 15.5l5 5m0-5l-5 5");
}
</style><path class="hhhynebos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:points-multiplier"} {...others} />);
}

export default Component;
