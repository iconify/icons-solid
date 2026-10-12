import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gn95q3wjk {
  width: 5.5px;
  height: 2.5px;
  x: 9.25px;
  y: 14.5px;
  rx: 0.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rw32syb4l {
  d: path("M4 21V8.5A1.5 1.5 0 0 1 5.5 7h13A1.5 1.5 0 0 1 20 8.5V21M12 7v4.5M7 17h10");
}
</style><g class="hntgybcog"><path class="rw32syb4l"/><rect class="gn95q3wjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:printer-3d"} {...others} />);
}

export default Component;
