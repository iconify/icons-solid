import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v1-j3qsvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20h18M7.5 20a4.5 4.5 0 0 1 9 0m-9.75-5.25l-1.5-1.5m12 1.5l1.5-1.5M7.045 7.301l8.66-5l2.25 3.898l-8.66 5Zm4.33-2.5l2.25 3.898");
}
</style><path class="v1-j3qsvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dose-evening"} {...others} />);
}

export default Component;
