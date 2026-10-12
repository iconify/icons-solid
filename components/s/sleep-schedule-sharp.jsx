import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jg7xt1_6k {
  cx: 10px;
  cy: 14px;
  r: 7.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ygmy9t_vg {
  d: path("M10 10.25V14l2.5 1.75M16 3.25h4l-4 4.5h4");
}
</style><g class="x2cwu0gfd"><circle class="jg7xt1_6k"/><path class="ygmy9t_vg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sleep-schedule-sharp"} {...others} />);
}

export default Component;
