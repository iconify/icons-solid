import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cltx4xb1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.75h8l.16.99l.93 5.52l.16.99H2.75l.16-.99l.93-5.52l.16-.99zm3.55 0v7.5M3.4 6.5h10.25M8.5 10.25v7h6.25m0-6h6.5v10h-6.5zM17 19h2");
}
</style><path class="cltx4xb1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:solar-charger-sharp"} {...others} />);
}

export default Component;
