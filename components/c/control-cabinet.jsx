import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wlizh_bpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.625 2.5h10.75A2.625 2.625 0 0 1 20 5.125v11.75a2.625 2.625 0 0 1-2.625 2.625H6.625A2.625 2.625 0 0 1 4 16.875V5.125A2.625 2.625 0 0 1 6.625 2.5M6 19.5v2m12-2v2m-6-19v17M9.5 9v3m5-3v3");
}
</style><path class="wlizh_bpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:control-cabinet"} {...others} />);
}

export default Component;
