import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qeajitbky {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.75h18V14a1.5 1.5 0 0 0-1.5 1.5v5.75h-3V15.5a1.5 1.5 0 0 0-3 0v5.75h-3V15.5a1.5 1.5 0 0 0-3 0v5.75h-3V15.5A1.5 1.5 0 0 0 3 14ZM3 11h18M2.75 3.75c1.156 0 1.156-1 2.313-1s1.156 1 2.312 1s1.156-1 2.313-1s1.156 1 2.312 1s1.156-1 2.313-1s1.156 1 2.312 1s1.156-1 2.313-1s1.156 1 2.312 1");
}
</style><path class="qeajitbky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:aqueduct"} {...others} />);
}

export default Component;
