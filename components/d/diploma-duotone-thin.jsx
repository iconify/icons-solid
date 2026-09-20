import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fqi0-7bcf {
  d: path("M4 8a3 3 0 0 0 0 6h16a3 3 0 0 0 0 -6Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l31czypqh {
  fill: currentColor;
  d: path("M4 8a3 3 0 0 0 0 6h16a3 3 0 0 0 0 -6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qds1w346b {
  d: path("M10 14v6l2 -2 2 2v-6");
}
</style><g class="hntgybcog"><path class="l31czypqh"/><path class="fqi0-7bcf"/><path class="qds1w346b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:diploma-duotone-thin"} {...others} />);
}

export default Component;
