import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d6_bzqp5x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 14A7.25 7.25 0 0 1 10 21.25H2.75ZM21 3L10.5 13.5m4 0h-4v-4m-5.9 2.6l.35-1.95m8 7.95l1.8-.8");
}
</style><path class="d6_bzqp5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cosmic-ray"} {...others} />);
}

export default Component;
