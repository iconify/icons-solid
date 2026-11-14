import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ue4sm1x5o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 2.5h11.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 16.75 6H5.25A1.75 1.75 0 0 1 3.5 4.25A1.75 1.75 0 0 1 5.25 2.5m2 15.5h11.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75H7.25a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 7.25 18M5.5 6v12m11-12v12M8.75 8.75h4.5m-4.5 6.5h4.5M9.5 8.75l3 6.5m0-6.5l-3 6.5");
}
</style><path class="ue4sm1x5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fixed-term-contract"} {...others} />);
}

export default Component;
