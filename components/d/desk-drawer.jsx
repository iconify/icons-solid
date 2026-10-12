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

.lix45-bxm {
  d: path("M11 12.5h2.5");
}

.nhfjb7bui {
  d: path("M4.75 6.75v14.5m14.5-14.5v14.5");
}

.php90ub8b {
  width: 8px;
  height: 5.5px;
  x: 8.25px;
  y: 9.75px;
  rx: 1px;
}

.t4q52jb4q {
  width: 18.5px;
  height: 3.5px;
  x: 2.75px;
  y: 3.25px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="t4q52jb4q"/><path class="nhfjb7bui"/><rect class="php90ub8b"/><path class="lix45-bxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:desk-drawer"} {...others} />);
}

export default Component;
