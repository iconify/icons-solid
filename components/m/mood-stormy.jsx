import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jgzp2wbof {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 14h9a4 4 0 0 0 0-8A5.5 5.5 0 0 0 6 7.5A3.5 3.5 0 0 0 7.5 14m5.5 0l-2.5 4H14l-2.5 3.5");
}
</style><path class="jgzp2wbof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mood-stormy"} {...others} />);
}

export default Component;
