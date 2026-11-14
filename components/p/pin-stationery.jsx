import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y8c7o_bev {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 3h5.75A2.625 2.625 0 0 1 13.5 5.625v11.75A2.625 2.625 0 0 1 10.875 20h-5.75A2.625 2.625 0 0 1 2.5 17.375V5.625A2.625 2.625 0 0 1 5.125 3M6 7.5h4m-4 4h3M16.5 4h4v13l-2 4l-2-4Zm0 3h4");
}
</style><path class="y8c7o_bev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pin-stationery"} {...others} />);
}

export default Component;
