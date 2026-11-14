import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sihj4_bdg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7h5m-2-2l2 2l-2 2m2 7.5h-5m2-2l-2 2l2 2m6-11.5H16m3 0h2.5m-11 9.5H16m3 0h2.5m-1.25-1.25v2.5");
}
</style><path class="sihj4_bdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:account-transaction-list"} {...others} />);
}

export default Component;
