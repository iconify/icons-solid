import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ppk8qz4nb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.16 3.31a9.25 9.25 0 0 1 5.95 10.3m-18.22 0a9.25 9.25 0 0 1 5.95-10.3m9.11 15.78a9.25 9.25 0 0 1-11.9 0m12.53-9.48Q12 12 15.5 18.06m-7 0Q12 12 5 12m3.5-6.06q3.5 6.06 7 0");
}
</style><path class="ppk8qz4nb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:chord-diagram"} {...others} />);
}

export default Component;
