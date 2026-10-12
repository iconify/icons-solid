import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dqepgkz9r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.75a1 1 0 0 1 1-1h11.5a6 6 0 0 1 6 6v1.5a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1Zm3 2.5h8.5m2.75 0h1.5M7 13.75v2.75m10-2.75v2.75m-14.25 0h18.5m-9.25 0v4.75");
}
</style><path class="dqepgkz9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:monorail"} {...others} />);
}

export default Component;
