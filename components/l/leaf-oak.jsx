import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u6dg1n20i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 6.5a2.5 2.5 0 1 1 1 4.5a2.5 2.5 0 1 1-1 4.5l-1.5 2l-1.5-2a2.5 2.5 0 1 1-1-4.5a2.5 2.5 0 1 1 1-4.5a2.5 2.5 0 1 1 3 0M12 5v16.5");
}
</style><path class="u6dg1n20i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:leaf-oak"} {...others} />);
}

export default Component;
