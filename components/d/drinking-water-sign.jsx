import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_-q_pb0z {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zh1d4bc4r {
  d: path("M6 7.5h6.5a2 2 0 0 1 2 2v1M9.25 5.75V7.5m.5 5.5h5.5l-.75 5h-4Z");
}
</style><g class="hntgybcog"><rect class="a_-q_pb0z"/><path class="zh1d4bc4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:drinking-water-sign"} {...others} />);
}

export default Component;
