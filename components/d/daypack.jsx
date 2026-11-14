import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fxbvc2ttc {
  d: path("M12 6za7 7 0 0 1 7 7v1.5a7 7 0 0 1-7 7a7 7 0 0 1-7-7V13a7 7 0 0 1 7-7m-1.75 0V4.75a1.75 1.75 0 0 1 3.5 0V6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zygkcyt_t {
  d: path("M9.688 13.5h4.625a2.19 2.19 0 0 1 2.187 2.188v.625a2.19 2.19 0 0 1-2.187 2.187H9.688A2.19 2.19 0 0 1 7.5 16.313v-.625A2.19 2.19 0 0 1 9.688 13.5m-.938-7v7m6.5-7v7");
}
</style><g class="hntgybcog"><path class="fxbvc2ttc"/><path class="zygkcyt_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:daypack"} {...others} />);
}

export default Component;
