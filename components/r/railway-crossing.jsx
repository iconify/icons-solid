import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qny6ybbeo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 3l8 7m0-7l-8 7m4-3.5v15M9.5 14H20a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 20 17H9.5A1.5 1.5 0 0 1 8 15.5A1.5 1.5 0 0 1 9.5 14");
}
</style><path class="qny6ybbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:railway-crossing"} {...others} />);
}

export default Component;
