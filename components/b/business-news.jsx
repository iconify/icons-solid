import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kzc_nm4uo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 18.5v-13a2 2 0 0 1 2-2h11.5a2 2 0 0 1 2 2v13A2.5 2.5 0 0 1 19 21H5a2.5 2.5 0 0 1-2.5-2.5V10H6m3.5-2.5H18m-8 10v-3m3 3v-5m3 5V11");
}
</style><path class="kzc_nm4uo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:business-news"} {...others} />);
}

export default Component;
