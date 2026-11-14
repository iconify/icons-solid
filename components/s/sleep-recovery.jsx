import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b5j8yrbqv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 2.5A5.5 5.5 0 1 0 18 8a5.5 5.5 0 0 1-5.5-5.5M4 17q8-1 16 0q1 2.25 0 4.5q-8-1-16 0q-1-2.25 0-4.5");
}
</style><path class="b5j8yrbqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sleep-recovery"} {...others} />);
}

export default Component;
