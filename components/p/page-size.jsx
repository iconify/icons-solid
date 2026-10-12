import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e1vdh_h_w {
  d: path("M14.25 2.75h-7a2 2 0 0 0-2 2v14.5a2 2 0 0 0 2 2h9.5a2 2 0 0 0 2-2v-12zm0 0v4.5h4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kcirip0ot {
  d: path("m8.75 17.75l5-5m-5 1.5v3.5h3.5m1.5-1.5v-3.5h-3.5");
}
</style><g class="hntgybcog"><path class="e1vdh_h_w"/><path class="kcirip0ot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:page-size"} {...others} />);
}

export default Component;
