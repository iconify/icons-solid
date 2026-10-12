import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qwrt--bsj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9h18.5M5.5 9v12.25M18.5 9v12.25m-15.25 0h4.5m8.5 0h4.5M12 19.75V12.5m-2.75 2.75L12 12.5l2.75 2.75");
}
</style><path class="qwrt--bsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:standing-desk"} {...others} />);
}

export default Component;
