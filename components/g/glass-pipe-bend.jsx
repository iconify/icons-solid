import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b3_fxlb3q {
  d: path("M10 2.5L8.5 4v10a3.5 3.5 0 0 0 7 0V4L14 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xdtenrd_u {
  d: path("M3.5 2.5L5 4v10a7 7 0 0 0 14 0V4l1.5-1.5");
}
</style><g class="hntgybcog"><path class="xdtenrd_u"/><path class="b3_fxlb3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:glass-pipe-bend"} {...others} />);
}

export default Component;
