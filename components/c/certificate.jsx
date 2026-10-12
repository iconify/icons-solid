import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.akfwsqkvf {
  d: path("M21.25 13.48V5.75a2 2 0 0 0-2-2H4.75a2 2 0 0 0-2 2v9.5a2 2 0 0 0 2 2h6.34a5.5 5.5 0 0 1 10.16-3.77M6.5 7.75h11m-11 3.75H11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j_mfn8vtz {
  cx: 16.5px;
  cy: 16.25px;
  r: 3px;
}

.xaho99ahr {
  d: path("M15 18.85v2.4l1.5-1l1.5 1v-2.4");
}
</style><g class="hntgybcog"><path class="akfwsqkvf"/><circle class="j_mfn8vtz"/><path class="xaho99ahr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:certificate"} {...others} />);
}

export default Component;
