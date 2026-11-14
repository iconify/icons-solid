import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kvhtrs0ef {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 15.5C8 13 5.5 11 5.5 8.5c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6c0 2.5-2.5 4.5-6.5 7M11 18h2a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 9.5 20v-.5A1.5 1.5 0 0 1 11 18m1-2.5V18");
}
</style><path class="kvhtrs0ef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:weather-balloon"} {...others} />);
}

export default Component;
