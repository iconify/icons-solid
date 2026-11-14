import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.amjhpub4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5c2.5-4 16.5-4 19 0Zm9.237-14.013l1.776 1.776a1.75 1.75 0 0 1 0 2.474l-.955.955a1.75 1.75 0 0 1-1.346.509l-1.671-.105a1.75 1.75 0 0 1-1.637-1.637l-.105-1.671a1.75 1.75 0 0 1 .509-1.346l.955-.955a1.75 1.75 0 0 1 2.474 0m1.013.763L17.5 3.5m-1-1l2 2M4.75 14h.01m2.99 1.75h.01");
}
</style><path class="amjhpub4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mulch-spread"} {...others} />);
}

export default Component;
