import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_tjnlboz {
  d: path("M6.5 21.25V6A3.25 3.25 0 0 1 13 6v15.25Z");
}

.gy3shub2r {
  width: 4.5px;
  height: 12.75px;
  x: 13px;
  y: 8.5px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wlpcbkh8o {
  d: path("M6.5 12.25h11m-11 5h11");
}
</style><g class="hntgybcog"><path class="a_tjnlboz"/><rect class="gy3shub2r"/><path class="wlpcbkh8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:splint"} {...others} />);
}

export default Component;
