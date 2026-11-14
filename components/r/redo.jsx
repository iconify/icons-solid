import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbt793l7s {
  d: path("m15.5 5.5l4 4l-4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j2lx7tb_b {
  d: path("M19.5 9.5h-10a5 5 0 0 0 0 10H15");
}
</style><g class="hntgybcog"><path class="j2lx7tb_b"/><path class="dbt793l7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:redo"} {...others} />);
}

export default Component;
