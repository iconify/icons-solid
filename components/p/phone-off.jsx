import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x3wbdp4st {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11q9.25-8.75 18.5 0v2.5a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1V12Q12 7.75 7.25 12v1.5a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1ZM12 12.75v6.5M9.75 17L12 19.25L14.25 17");
}
</style><path class="x3wbdp4st"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:phone-off"} {...others} />);
}

export default Component;
