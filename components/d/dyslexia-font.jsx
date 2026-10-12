import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uac-g-ovz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.75 18.5l5-13.75l5 13.75m-8.15-5h6.3m3.35 1.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m6.5-3.75v7.25m-18 2.75h18.5");
}
</style><path class="uac-g-ovz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:dyslexia-font"} {...others} />);
}

export default Component;
