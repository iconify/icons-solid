import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b1vufw1ed {
  width: 18.5px;
  height: 16.5px;
  x: 2.75px;
  y: 3.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 3px;
}

.tqxug8b1o {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 8.75v1.5c0 1-.5 1.75-1.25 2.25M11 8.75v1.5c0 1-.5 1.75-1.25 2.25");
}

.wm97cjsry {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.25 9.25h3M6.75 16h10.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="b1vufw1ed"/><path class="tqxug8b1o"/><path class="wm97cjsry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:quote-post"} {...others} />);
}

export default Component;
