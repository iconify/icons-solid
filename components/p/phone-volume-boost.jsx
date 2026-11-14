import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vk3vfeb6o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h1a3.5 3.5 0 0 1 3.5 3.5v11A3.5 3.5 0 0 1 7 21H6a3.5 3.5 0 0 1-3.5-3.5v-11A3.5 3.5 0 0 1 6 3m-.5 15h2m5.652-8.652a3.75 3.75 0 0 1 0 5.304m2.71-7.152a7 7 0 0 1 0 9m3.034-10.379a10.25 10.25 0 0 1 0 11.758");
}
</style><path class="vk3vfeb6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:phone-volume-boost"} {...others} />);
}

export default Component;
