import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x7uaq03dm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.52 5.78l5.87 1.25q1.96.41 1.54 2.37l-2.08 9.78q-.41 1.96-2.37 1.54l-5.87-1.25q-1.96-.41-1.54-2.37l2.08-9.78q.41-1.96 2.37-1.54m8.23-1.53l.75-1.5m1 3.75l1.5-.75m-5.5-2l.25-1");
}
</style><path class="x7uaq03dm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:referee-card"} {...others} />);
}

export default Component;
