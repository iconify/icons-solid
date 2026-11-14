import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pn3v8s_5p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5h19m-19 0c1.25-3 2.25-3 3.5 0c1.25 6 2.75 6 4 0c1.25-10 2.75-10 4 0c1.25 6 2.75 6 4 0c1.25-3 2.25-3 3.5 0");
}
</style><path class="pn3v8s_5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:wave-packet"} {...others} />);
}

export default Component;
