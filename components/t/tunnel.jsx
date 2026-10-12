import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p3r2ghb6u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 21.25a1 1 0 0 1-1-1V12a9.25 9.25 0 0 1 18.5 0v8.25a1 1 0 0 1-1 1H17V14.5a5 5 0 0 0-10 0v6.75Zm7-5.25L9.5 21.25M13.25 16l1.25 5.25");
}
</style><path class="p3r2ghb6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tunnel"} {...others} />);
}

export default Component;
