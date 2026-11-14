import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u9otl-qhe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19L6.75 5L11 19m-7-4.5h5.5M14 5h3a3.25 3.25 0 0 1 0 6.5h.5a3.75 3.75 0 0 1 0 7.5H14Zm0 6.5h3");
}
</style><path class="u9otl-qhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:uppercase"} {...others} />);
}

export default Component;
