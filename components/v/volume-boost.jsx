import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.blc85zb1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 9.5A1.5 1.5 0 0 1 5.25 8h2.2l4.4-3.7a.9.9 0 0 1 1.5.7v14a.9.9 0 0 1-1.5.7L7.45 16h-2.2a1.5 1.5 0 0 1-1.5-1.5Zm14.5 7.25v-9.5m-3 3l3-3l3 3");
}
</style><path class="blc85zb1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:volume-boost"} {...others} />);
}

export default Component;
