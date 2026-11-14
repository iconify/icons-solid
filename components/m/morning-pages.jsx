import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kee9fjkwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5H12A3.5 3.5 0 0 1 15.5 6v8a3.5 3.5 0 0 1-3.5 3.5H6.5A3.5 3.5 0 0 1 3 14V6a3.5 3.5 0 0 1 3.5-3.5m0 4.5H12m-5.5 4H10m5 10.5h7m-6.5 0a3 3 0 0 1 6 0m-3-6.75v1.5m2.25 1.25l.75-1.25");
}
</style><path class="kee9fjkwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:morning-pages"} {...others} />);
}

export default Component;
