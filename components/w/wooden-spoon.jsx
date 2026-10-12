import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tnx1_b6ub {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.92 11.08zq-1.24-1.24-.11-2.89l2.34-3.42q1.13-1.65 2.54-.24l1.78 1.78q1.41 1.41-.24 2.54l-3.42 2.34q-1.65 1.13-2.89-.11M18 6l-1.75 1.75m-4.5 5.56l-1.06-1.06q-.88-.88-1.76 0l-4.74 4.74q-.88.88 0 1.76l1.06 1.06q.88.88 1.76 0l4.74-4.74q.88-.88 0-1.76");
}
</style><path class="tnx1_b6ub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:wooden-spoon"} {...others} />);
}

export default Component;
