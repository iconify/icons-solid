import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sa8wa2hvy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5h15V6h-15Zm2 15.5h15v3.5h-15Zm0-12v12m11-12v12M8.75 8.75h4.5m-4.5 6.5h4.5M9.5 8.75l3 6.5m0-6.5l-3 6.5");
}
</style><path class="sa8wa2hvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fixed-term-contract"} {...others} />);
}

export default Component;
