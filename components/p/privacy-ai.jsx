import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b5iy4umwa {
  d: path("M8 10.25V7.5a4 4 0 0 1 8 0v2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mrfl2obow {
  d: path("M12 12.25q.42 3.08 3.5 3.5q-3.08.42-3.5 3.5q-.42-3.08-3.5-3.5q3.08-.42 3.5-3.5");
}

.r6-o0bcpk {
  width: 14.5px;
  height: 11px;
  x: 4.75px;
  y: 10.25px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><path class="b5iy4umwa"/><rect class="r6-o0bcpk"/><path class="mrfl2obow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:privacy-ai"} {...others} />);
}

export default Component;
