import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pggrz7niw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 4zA1.75 1.75 0 0 1 6 5.75v11.5A1.75 1.75 0 0 1 4.25 19a1.75 1.75 0 0 1-1.75-1.75V5.75A1.75 1.75 0 0 1 4.25 4m15.5 0za1.75 1.75 0 0 1 1.75 1.75v11.5A1.75 1.75 0 0 1 19.75 19A1.75 1.75 0 0 1 18 17.25V5.75A1.75 1.75 0 0 1 19.75 4M6 5.5h12M9 8.25V17m3-8.75V17m3-8.75V17");
}
</style><path class="pggrz7niw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:filter-press"} {...others} />);
}

export default Component;
