import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nwojnpb6w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.329 13H7.5v2h-5V4.5h4c1 2 3 3 6 3.5l6 1c1.5.25 3 1.5 3 3v1h-2.171M2.5 12h13.8m2.1 0h3.1m-13-6.25L9.75 7.5M11 6.75l1 1.5m2.75 13.25l4-4m-1.414-2.578l4.242 4.242l-1.414 1.414l-4.242-4.242Z");
}
</style><path class="nwojnpb6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:shoe-repair"} {...others} />);
}

export default Component;
