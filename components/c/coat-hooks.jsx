import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bg_xe8bsw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 6.5h15.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 19.75 10H4.25A1.75 1.75 0 0 1 2.5 8.25A1.75 1.75 0 0 1 4.25 6.5M4.5 10v6.5a1.5 1.5 0 0 0 3 0v-1m3-5.5v6.5a1.5 1.5 0 0 0 3 0v-1m3-5.5v6.5a1.5 1.5 0 0 0 3 0v-1");
}
</style><path class="bg_xe8bsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:coat-hooks"} {...others} />);
}

export default Component;
