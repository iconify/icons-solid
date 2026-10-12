import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c2nje4u6l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 11.25h9q1.5 0 1.85 1.46l1.55 6.58q.35 1.46-1.15 1.46H5.25q-1.5 0-1.15-1.46l1.55-6.58Q6 11.25 7.5 11.25M5.5 16h13m-10-4.75L6 3.5m9.5 7.75L18 3.5");
}
</style><path class="c2nje4u6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:binder-clip"} {...others} />);
}

export default Component;
