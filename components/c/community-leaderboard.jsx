import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wstadyb_k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5v-6h5v-3.25h7v2.25h5v7Zm8.5-17l.882 1.536l1.733.364l-1.188 1.314l.189 1.761L12 7.75l-1.616.725l.189-1.761L9.385 5.4l1.733-.364Z");
}
</style><path class="wstadyb_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:community-leaderboard"} {...others} />);
}

export default Component;
