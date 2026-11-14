import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bg1wdrc_i {
  d: path("M7.25 12a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o830nccfp {
  d: path("m12.873 3.003l6.5 3.742a1.75 1.75 0 0 1 .877 1.517v7.476a1.75 1.75 0 0 1-.877 1.517l-6.5 3.742a1.75 1.75 0 0 1-1.746 0l-6.5-3.742a1.75 1.75 0 0 1-.877-1.517V8.262a1.75 1.75 0 0 1 .877-1.517l6.5-3.742a1.75 1.75 0 0 1 1.746 0");
}
</style><g class="hntgybcog"><path class="o830nccfp"/><path class="bg1wdrc_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:benzene-ring"} {...others} />);
}

export default Component;
