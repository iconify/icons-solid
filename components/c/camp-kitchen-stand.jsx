import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pfvw6gbzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19m-17 0l15 8.5m0-8.5l-15 8.5m4.75-12h5.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 14.75 13h-5.5a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 9.25 9.5m.25 0V5h5v4.5");
}
</style><path class="pfvw6gbzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:camp-kitchen-stand"} {...others} />);
}

export default Component;
