import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sbno0_bgl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6v12m17-15.5V6m0 10v5.5M3.5 6c8.5 0 8.5-3.5 17-3.5m-17 7C12 9.5 12 6 20.5 6m-17 6.5c8.5 0 8.5 3.5 17 3.5m-17 2c8.5 0 8.5 3.5 17 3.5");
}
</style><path class="sbno0_bgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chart-sankey"} {...others} />);
}

export default Component;
