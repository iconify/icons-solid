import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zfb6w_u1q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 6q.78 5.72 6.5 6.5q-5.72.78-6.5 6.5q-.78-5.72-6.5-6.5q5.72-.78 6.5-6.5M5.75 3q.33 2.42 2.75 2.75q-2.42.33-2.75 2.75Q5.42 6.08 3 5.75Q5.42 5.42 5.75 3m12.5 12.5q.33 2.42 2.75 2.75q-2.42.33-2.75 2.75q-.33-2.42-2.75-2.75q2.42-.33 2.75-2.75");
}
</style><path class="zfb6w_u1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sparkle"} {...others} />);
}

export default Component;
