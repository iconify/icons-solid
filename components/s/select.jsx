import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ke6ssq19a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7V4.5a2 2 0 0 1 2-2H7m6 0h2.5a2 2 0 0 1 2 2V7m-15 6v2.5a2 2 0 0 0 2 2H7m4-6.5l10 3.75l-4.25 2l-2 4.25Z");
}
</style><path class="ke6ssq19a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:select"} {...others} />);
}

export default Component;
