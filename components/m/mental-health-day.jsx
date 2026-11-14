import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jhk75ok8a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.1 20H3V4.5h16v4.7M7.5 2.5v4m7-4v4M3 9.5h11.2M15 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2-3.75V12m0 8.75V22m-3.75-5H12m8.75 0H22m-2.25 2.75l.75.75m-6.25-6.25l-.75-.75m6.25.75l.75-.75m-6.25 6.25l-.75.75");
}
</style><path class="jhk75ok8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mental-health-day"} {...others} />);
}

export default Component;
