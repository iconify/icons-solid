import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hyjon0btb {
  d: path("M10 3L5 21");
}

.m-5zcvb8c {
  d: path("M20 16H2");
}

.s41he0bba {
  d: path("M22 9H4");
}

.t1in8db2h {
  d: path("M19 3L14 21");
}
</style><g class="hntgybcog"><path class="hyjon0btb"/><path class="t1in8db2h"/><path class="s41he0bba"/><path class="m-5zcvb8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hashtag-linear"} {...others} />);
}

export default Component;
