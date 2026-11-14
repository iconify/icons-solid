import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.azi8ezbia {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5.5h11a5 5 0 0 1 5 5v2h-4v-2a1 1 0 0 0-1-1H4Zm6 0v-3m-2.5 0h5m5.5 13l1.75 3a2 2 0 1 1-3.5 0Z");
}
</style><path class="azi8ezbia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:faucet"} {...others} />);
}

export default Component;
