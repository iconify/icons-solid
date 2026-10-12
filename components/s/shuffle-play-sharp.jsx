import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wvyam6bfg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.8 8.18l4.9 3.14l1.05.68l-1.05.68l-4.9 3.14l-1.05.68v-9zm7.45 9.32L21 6.5m-3.5 0H21V10m-9.75-3.5l3.35 3.8m3.05 3.4L21 17.5m0-3.5v3.5h-3.5");
}
</style><path class="wvyam6bfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:shuffle-play-sharp"} {...others} />);
}

export default Component;
