import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vr_ifmalj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.055 8.288l5.657 5.657m-.707-10.607l-4.95 4.95m7.779-2.122l-7.779 7.779m10.607-4.95l-4.95 4.95m-6.894-1.238l2.475 2.475l-4.95 4.95l-2.475-2.475Z");
}
</style><path class="vr_ifmalj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hand-fork"} {...others} />);
}

export default Component;
