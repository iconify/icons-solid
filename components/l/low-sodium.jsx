import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s8ke-_b5g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.9 10H17v3.1m0 7.8v.6H7V10.9m1.618-6.251C9.51 3.892 10.699 3.5 12 3.5c2.75 0 5 1.75 5 5V10m-6-4.25h.01M13 5h.01M15 6.75h.01M3.5 3.5l17 17");
}
</style><path class="s8ke-_b5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:low-sodium"} {...others} />);
}

export default Component;
