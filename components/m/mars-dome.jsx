import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c03w2lbvk {
  d: path("M2.75 20.5a9.25 9.25 0 0 1 18.5 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tv40p4b1r {
  d: path("M4 16h16M7.25 20.5L9.5 16l2.5-4.75L14.5 16l2.25 4.5M9.5 16h5");
}

.zgosk9b6o {
  cx: 17.75px;
  cy: 5.25px;
  r: 2.5px;
}
</style><g class="hntgybcog"><path class="c03w2lbvk"/><path class="tv40p4b1r"/><circle class="zgosk9b6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mars-dome"} {...others} />);
}

export default Component;
