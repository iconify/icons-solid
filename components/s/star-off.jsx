import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qw9c9kbnv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.42 4.27l1.72 4.14q.42 1.02 1.51 1.11l4.48.35q1.1.08.26.8l-3.42 2.91q-.83.71-.58 1.78l1.05 4.37q.26 1.07-.68.49l-3.82-2.34q-.94-.58-1.88 0l-3.82 2.34q-.94.58-.68-.49l1.05-4.37q.25-1.07-.58-1.78l-3.42-2.91q-.84-.72.26-.8l4.48-.35q1.09-.09 1.51-1.11l1.72-4.14q.42-1.02.84 0");
}
</style><path class="qw9c9kbnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:star-off"} {...others} />);
}

export default Component;
