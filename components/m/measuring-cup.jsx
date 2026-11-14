import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bxd0zlf_d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7h12l-1 12c-.2 1-1 1.5-2 1.5H8c-1 0-1.8-.5-2-1.5Zm12 2c3.5 0 3.5 5-.5 5m-10-2h3m-3 4h3");
}
</style><path class="bxd0zlf_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:measuring-cup"} {...others} />);
}

export default Component;
