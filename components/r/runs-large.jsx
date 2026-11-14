import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ojcht94my {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.85 18.5H5v-8l-3-1l2-5L8 3q2.5 3 5 0l4 1.5l2 5l-3 1v2.55M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="ojcht94my"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:runs-large"} {...others} />);
}

export default Component;
