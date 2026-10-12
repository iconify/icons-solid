import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tdrr23pbz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4.75h12q1.25 0 1.45 1.23l1.6 10.04q.2 1.23-1.02 1.48l-4.81 1q-1.22.25-1.55-.95l-1.34-4.85q-.33-1.2-.66 0l-1.34 4.85q-.33 1.2-1.55.95l-4.81-1q-1.22-.25-1.02-1.48l1.6-10.04Q4.75 4.75 6 4.75M4.5 8h15M11 8l-1 3.25M13 8l1 3.25");
}
</style><path class="tdrr23pbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:shorts"} {...others} />);
}

export default Component;
