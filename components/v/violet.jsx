import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ze08r7b5q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8.25a3.75 3.75 0 1 1 2.75 2a3.75 3.75 0 1 1-1 3.5a3.75 3.75 0 1 1-3.5 0a3.75 3.75 0 1 1-1-3.5a3.75 3.75 0 1 1 2.75-2m0 3h.01");
}
</style><path class="ze08r7b5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:violet"} {...others} />);
}

export default Component;
