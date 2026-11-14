import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v21ewj64d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 21.5l2-4.5l-.75-3l2-4.5l-.5-3L8 2.5m12.5 19l-2-4.5l.75-3l-2-4.5l.5-3l-1.75-4M11 7h.01M13 12h.01M11 17h.01");
}
</style><path class="v21ewj64d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:road-unpaved"} {...others} />);
}

export default Component;
