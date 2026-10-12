import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kh2k7mg7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.5h18.5v3H2.75zm3.75 3V9M12 7.5V9m5.5-1.5V9M2.75 20.5h18.5M6.5 11l1.6 2.036V14a1.6 1.6 0 0 1-3.2 0v-.964zm5.5 0l1.6 2.036V14a1.6 1.6 0 0 1-3.2 0v-.964zm5.5 0l1.6 2.036V14a1.6 1.6 0 0 1-3.2 0v-.964z");
}
</style><path class="kh2k7mg7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:drip-irrigation-sharp"} {...others} />);
}

export default Component;
