import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c2n55spne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5v-13A1.5 1.5 0 0 1 4.5 7h5A1.5 1.5 0 0 1 11 8.5v13M5.75 11h2.5m5.5-6.5h7.75V10h-7.75Zm0 2.25h7.75M11 14.5h10.5");
}
</style><path class="c2n55spne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fare-card-reader-gate"} {...others} />);
}

export default Component;
