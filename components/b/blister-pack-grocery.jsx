import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aqfy125qk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 17.5l3.5-7h15.5l-3.5 7Zm4.25-7V7a2 2 0 0 1 4 0v3.5m3 0V7a2 2 0 0 1 4 0v3.5");
}
</style><path class="aqfy125qk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:blister-pack-grocery"} {...others} />);
}

export default Component;
