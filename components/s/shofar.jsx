import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fhpnby4xt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 18.5c6 .25 10.5-2.5 12.75-8.25L17 5.5l4.25 1.25l-1.5 5.25c-2.75 7-8.75 9.5-17 9ZM16 9.75L20 11m-6.25 3l3.75 1.75");
}
</style><path class="fhpnby4xt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:shofar"} {...others} />);
}

export default Component;
