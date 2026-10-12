import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tep_r1b-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16 2.75a2.5 2.5 0 0 1 2.5 2.5v2a2.5 2.5 0 0 1-5 0v-2a2.5 2.5 0 0 1 2.5-2.5m-8 11.5a2.5 2.5 0 0 1 2.5 2.5v2a2.5 2.5 0 0 1-5 0v-2a2.5 2.5 0 0 1 2.5-2.5M7.25 4L9 2.75v7m6.25 5.75L17 14.25v7");
}
</style><path class="tep_r1b-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:binary"} {...others} />);
}

export default Component;
