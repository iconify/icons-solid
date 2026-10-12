import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jiq1p6b7d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.95 3.56l5.1 4.38q.95.81.05 1.68l-5.2 5.01q-.9.87-1.8 0L5.9 9.62q-.9-.87.05-1.68l5.1-4.38q.95-.81 1.9 0M12 5.25V13M7.75 8.75h8.5M12 16.25c0 1.5-1.75 1.5-1.75 2.5s1.75 1 1.75 2.5");
}
</style><path class="jiq1p6b7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:kite"} {...others} />);
}

export default Component;
